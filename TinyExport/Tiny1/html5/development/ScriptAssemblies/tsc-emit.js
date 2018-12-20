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
    var NewBehaviourFilter = /** @class */ (function (_super) {
        __extends(NewBehaviourFilter, _super);
        function NewBehaviourFilter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return NewBehaviourFilter;
    }(ut.EntityFilter));
    game.NewBehaviourFilter = NewBehaviourFilter;
    var NewBehaviour = /** @class */ (function (_super) {
        __extends(NewBehaviour, _super);
        function NewBehaviour() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return NewBehaviour;
    }(ut.ComponentBehaviour));
    game.NewBehaviour = NewBehaviour;
})(game || (game = {}));
game.Thing;
radius: Int32;
time: Float32;
speed: Float32;
var game;
(function (game) {
    /** New System */
    var NewSystem = /** @class */ (function (_super) {
        __extends(NewSystem, _super);
        function NewSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NewSystem_1 = NewSystem;
        NewSystem.prototype.OnUpdate = function () {
            var _this = this;
            var dt = this.scheduler.deltaTime();
            this.world.forEach([ut.Entity, game.Thing], function (entity, thing) {
                var r = thing.radius;
                var t = thing.time + dt;
                var angle = t * NewSystem_1.twoPi * thing.speed;
                var x = r * Math.cos(angle);
                var y = r * Math.sin(angle);
                // the iteration doesn't include the `ut.Core2D.TransformLocalPosition` component,
                // you must get and set its component data explicitly, or use the `usingComponentData` helper method
                _this.world.usingComponentData(entity, [ut.Core2D.TransformLocalPosition], function (position) {
                    position.position = new Vector3(x, y, 0);
                });
                // `thing` is a component view - that is, you can write directly to it
                thing.time = t;
            });
        };
        var NewSystem_1;
        NewSystem.twoPi = 2 * Math.PI;
        NewSystem = NewSystem_1 = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd)
        ], NewSystem);
        return NewSystem;
    }(ut.ComponentSystem));
    game.NewSystem = NewSystem;
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