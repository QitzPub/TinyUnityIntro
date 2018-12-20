var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var game;
(function (game) {
    var AudioService = /** @class */ (function () {
        function AudioService() {
        }
        /**
         * Helper method to play an audio clip by entity name
         */
        AudioService.playAudioSourceByName = function (world, name) {
            var entity = world.getEntityByName(name);
            if (entity.isNone()) {
                console.error("game.AudioService.playAudioSourceByName: No entity with the name '" + name + "' was found");
                return;
            }
            AudioService.playAudioSource(world, entity);
        };
        /**
         * Helper method to play an audio clip
         */
        AudioService.playAudioSource = function (world, entity) {
            if (!world.hasComponent(entity, ut.Audio.AudioSource)) {
                console.error("game.AudioService.playAudioSource: Entity does not have an AudioSource component");
                return;
            }
            if (!world.hasComponent(entity, ut.Audio.AudioSourceStart))
                world.addComponent(entity, ut.Audio.AudioSourceStart);
        };
        return AudioService;
    }());
    game.AudioService = AudioService;
})(game || (game = {}));
var game;
(function (game) {
    var GravitySystem = /** @class */ (function (_super) {
        __extends(GravitySystem, _super);
        function GravitySystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
        * Applies constant forces to all entities with the `Gravity` component.
        */
        GravitySystem.prototype.OnUpdate = function () {
            var dt = this.scheduler.deltaTime();
            this.world.forEach([game.Gravity, game.Velocity], function (gravity, velocity) {
                var v = velocity.velocity;
                var g = gravity.gravity;
                v.x += g.x * dt;
                v.y += g.y * dt;
                velocity.velocity = v;
            });
        };
        GravitySystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(game.Gravity, game.Velocity)
        ], GravitySystem);
        return GravitySystem;
    }(ut.ComponentSystem));
    game.GravitySystem = GravitySystem;
})(game || (game = {}));
var game;
(function (game) {
    var MovementSystem = /** @class */ (function (_super) {
        __extends(MovementSystem, _super);
        function MovementSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MovementSystem.prototype.OnUpdate = function () {
            var _this = this;
            var dt = this.scheduler.deltaTime();
            this.world.forEach([ut.Core2D.TransformLocalPosition, game.Movement, game.Velocity, game.Ground], function (transformLocalPosition, movement, velocity, ground) {
                if (!ut.Runtime.Input.getMouseButtonDown(0))
                    return;
                if (transformLocalPosition.position.y == ground.groundLevel) {
                    var vec = velocity.velocity;
                    vec.y = movement.speed;
                    velocity.velocity = vec;
                    var rnd = Math.round((Math.random()) * 4 + 0.5);
                    game.AudioService.playAudioSourceByName(_this.world, 'audio/voice' + rnd.toString());
                }
            });
        };
        MovementSystem = __decorate([
            ut.executeAfter(ut.Shared.InputFence),
            ut.executeBefore(ut.Shared.RenderingFence),
            ut.requiredComponents(ut.Core2D.TransformLocalPosition),
            ut.requiredComponents(game.Movement, game.Velocity)
        ], MovementSystem);
        return MovementSystem;
    }(ut.ComponentSystem));
    game.MovementSystem = MovementSystem;
})(game || (game = {}));
var game;
(function (game) {
    var VelocitySystem = /** @class */ (function (_super) {
        __extends(VelocitySystem, _super);
        function VelocitySystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
        * Updates the `TransformLocalPosition` based on the `Velocity` component each frame.
        */
        VelocitySystem.prototype.OnUpdate = function () {
            this.world.forEach([ut.Core2D.TransformLocalPosition, game.Velocity, game.Ground], function (transform, velocity, ground) {
                var p = transform.position;
                var v = velocity.velocity;
                p.x += v.x;
                p.y += v.y;
                if (p.y < ground.groundLevel) {
                    p.y = ground.groundLevel;
                }
                transform.position = p;
            });
        };
        VelocitySystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(ut.Core2D.TransformLocalPosition, game.Velocity, game.Ground)
        ], VelocitySystem);
        return VelocitySystem;
    }(ut.ComponentSystem));
    game.VelocitySystem = VelocitySystem;
})(game || (game = {}));
var ut;
(function (ut) {
    var EntityGroup = /** @class */ (function () {
        function EntityGroup() {
        }
        /**
         * @method
         * @desc Creates a new instance of the given entity group by name and returns all entities
         * @param {ut.World} world - The world to add to
         * @param {string} name - The fully qualified name of the entity group
         * @returns Flat list of all created entities
         */
        EntityGroup.instantiate = function (world, name) {
            var data = this.getEntityGroupData(name);
            if (data == undefined)
                throw "ut.EntityGroup.instantiate: No 'EntityGroup' was found with the name '" + name + "'";
            return data.load(world);
        };
        ;
        /**
         * @method
         * @desc Destroys all entities that were instantated with the given group name
         * @param {ut.World} world - The world to destroy from
         * @param {string} name - The fully qualified name of the entity group
         */
        EntityGroup.destroyAll = function (world, name) {
            var type = this.getEntityGroupData(name).Component;
            world.forEach([ut.Entity, type], function (entity, instance) {
                // @TODO This should REALLY not be necessary
                // We are protecting against duplicate calls to `destroyAllEntityGroups` within an iteration
                if (world.exists(entity)) {
                    world.destroyEntity(entity);
                }
            });
        };
        /**
         * @method
         * @desc Returns an entity group object by name
         * @param {string} name - Fully qualified group name
         */
        EntityGroup.getEntityGroupData = function (name) {
            var parts = name.split('.');
            if (parts.length < 2)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            var shiftedParts = parts.shift();
            var initialData = entities[shiftedParts];
            if (initialData == undefined)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            return parts.reduce(function (v, p) {
                return v[p];
            }, initialData);
        };
        return EntityGroup;
    }());
    ut.EntityGroup = EntityGroup;
})(ut || (ut = {}));
var ut;
(function (ut) {
    var EntityLookupCache = /** @class */ (function () {
        function EntityLookupCache() {
        }
        EntityLookupCache.getByName = function (world, name) {
            var entity;
            if (name in this._cache) {
                entity = this._cache[name];
                if (world.exists(entity))
                    return entity;
            }
            entity = world.getEntityByName(name);
            this._cache[name] = entity;
            return entity;
        };
        EntityLookupCache._cache = {};
        return EntityLookupCache;
    }());
    ut.EntityLookupCache = EntityLookupCache;
})(ut || (ut = {}));
//# sourceMappingURL=tsc-emit.js.map