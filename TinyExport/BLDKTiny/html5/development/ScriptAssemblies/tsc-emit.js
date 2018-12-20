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
    var GoalCollisionSystem = /** @class */ (function (_super) {
        __extends(GoalCollisionSystem, _super);
        function GoalCollisionSystem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isAllFinished = true;
            return _this;
        }
        GoalCollisionSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.isAllFinished = true;
            this.world.forEach([game.Goal, ut.HitBox2D.HitBoxOverlapResults], function (goal, overlap) {
                if (0 < overlap.overlaps.length && !goal.isReached) {
                    if (overlap.overlaps[0].otherEntity != null) {
                        if (_this.world.hasComponent(overlap.overlaps[0].otherEntity, game.Prince)) {
                            goal.isReached = true;
                            overlap.overlaps[0].otherEntity;
                            _this.world.destroyEntity(overlap.overlaps[0].otherEntity);
                        }
                    }
                }
            });
            this.world.forEach([game.Goal], function (goal) {
                if (!goal.isReached) {
                    _this.isAllFinished = false;
                }
            });
            if (this.isAllFinished) {
                console.log("Finished");
            }
        };
        return GoalCollisionSystem;
    }(ut.ComponentSystem));
    game.GoalCollisionSystem = GoalCollisionSystem;
})(game || (game = {}));
var game;
(function (game) {
    var GravitySystem = /** @class */ (function (_super) {
        __extends(GravitySystem, _super);
        function GravitySystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GravitySystem.prototype.OnUpdate = function () {
            var dt = this.scheduler.deltaTime();
            this.world.forEach([game.Gravity, ut.Physics2D.Velocity2D], function (gravity, velocity) {
                var v = velocity.velocity;
                var g = gravity.gravity;
                v.x += g.x * dt;
                v.y += g.y * dt;
                velocity.velocity = v;
            });
        };
        GravitySystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd)
        ], GravitySystem);
        return GravitySystem;
    }(ut.ComponentSystem));
    game.GravitySystem = GravitySystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var InputSystem = /** @class */ (function (_super) {
        __extends(InputSystem, _super);
        function InputSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InputSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([ut.Core2D.TransformLocalPosition, game.ShootPoint], function (transform, shootPoint) {
                if (ut.Runtime.Input.getMouseButtonDown(0)) {
                    InputSystem.clickFrom = ut.Runtime.Input.getInputPosition();
                }
                if (ut.Runtime.Input.getMouseButtonUp(0) && 0 < shootPoint.shoots) {
                    InputSystem.clickTo = ut.Runtime.Input.getInputPosition();
                    var instance = ut.EntityGroup.instantiate(_this.world, 'game.ShootEntities')[0];
                    _this.world.setComponentData(instance, transform);
                    shootPoint.shoots--;
                }
                if (ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.Space)) {
                    var instance = ut.EntityGroup.instantiate(_this.world, 'game.PrinceEntities')[0];
                }
            });
        };
        InputSystem.clickFrom = new Vector2(0, 0);
        InputSystem.clickTo = new Vector2(0, 0);
        return InputSystem;
    }(ut.ComponentSystem));
    game.InputSystem = InputSystem;
})(game || (game = {}));
var game;
(function (game) {
    var PrinceBehaviourFilter = /** @class */ (function (_super) {
        __extends(PrinceBehaviourFilter, _super);
        function PrinceBehaviourFilter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PrinceBehaviourFilter;
    }(ut.EntityFilter));
    game.PrinceBehaviourFilter = PrinceBehaviourFilter;
    var PrinceBehaviour = /** @class */ (function (_super) {
        __extends(PrinceBehaviour, _super);
        function PrinceBehaviour() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PrinceBehaviour.prototype.OnEntityUpdate = function () {
            if (this.data.overlap == null) {
                this.data.velocity.velocity = PrinceBehaviour.fallingVector;
                return;
            }
            var overlaps = this.data.overlap.overlaps;
            var grounding = false;
            var climbing = false;
            if (0 < overlaps.length) {
                for (var i = 0; i < overlaps.length; i++) {
                    if (this.world.hasComponent(overlaps[i].otherEntity, game.GroundingHitBox)) {
                        grounding = true;
                    }
                    else if (this.world.hasComponent(overlaps[i].otherEntity, game.ClimbingHitBox)) {
                        climbing = true;
                    }
                }
            }
            if (climbing) {
                this.data.velocity.velocity = PrinceBehaviour.climbingVector;
            }
            else if (grounding) {
                this.data.velocity.velocity = PrinceBehaviour.groundingVector;
            }
            else {
                this.data.velocity.velocity = PrinceBehaviour.fallingVector;
            }
        };
        PrinceBehaviour.groundingVector = new Vector2(6, 0);
        PrinceBehaviour.fallingVector = new Vector2(0, -8);
        PrinceBehaviour.climbingVector = new Vector2(0, 6);
        return PrinceBehaviour;
    }(ut.ComponentBehaviour));
    game.PrinceBehaviour = PrinceBehaviour;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var PrinceSpawnerSystem = /** @class */ (function (_super) {
        __extends(PrinceSpawnerSystem, _super);
        function PrinceSpawnerSystem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.canSpawn = false;
            _this.deadPrinces = 0;
            return _this;
        }
        PrinceSpawnerSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.ShootPoint], function (shootPoint) {
                _this.canSpawn = shootPoint.shoots <= 0;
            });
            if (this.canSpawn) {
                this.world.forEach([game.PrinceSpawner, ut.Core2D.TransformLocalPosition], function (spawner, pos) {
                    spawner.time += _this.scheduler.deltaTime();
                    if (spawner.interval < spawner.time && 0 < spawner.princes) {
                        spawner.time = 0;
                        var instance = ut.EntityGroup.instantiate(_this.world, 'game.PrinceEntities')[0];
                        _this.world.setComponentData(instance, pos);
                        spawner.princes--;
                    }
                });
            }
        };
        return PrinceSpawnerSystem;
    }(ut.ComponentSystem));
    game.PrinceSpawnerSystem = PrinceSpawnerSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var ShootHitSystem = /** @class */ (function (_super) {
        __extends(ShootHitSystem, _super);
        function ShootHitSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ShootHitSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([ut.Entity, game.Shoot, ut.HitBox2D.HitBoxOverlapResults, ut.Core2D.TransformLocalPosition], function (entity, shoot, overlap, position) {
                var overlaps = overlap.overlaps;
                if (0 < overlaps.length) {
                    for (var i = 0; i < overlaps.length; i++) {
                        if (_this.world.hasComponent(overlaps[i].otherEntity, game.GroundingHitBox) || _this.world.hasComponent(overlaps[i].otherEntity, game.ClimbingHitBox)) {
                            var e = ut.EntityGroup.instantiate(_this.world, "game.PlantEntities")[0];
                            _this.world.setComponentData(e, position);
                            _this.world.removeComponent(entity, game.Shoot);
                            _this.world.removeComponent(entity, ut.Physics2D.Velocity2D);
                            _this.world.removeComponent(entity, ut.HitBox2D.RectHitBox2D);
                            return;
                        }
                    }
                }
            });
        };
        return ShootHitSystem;
    }(ut.ComponentSystem));
    game.ShootHitSystem = ShootHitSystem;
})(game || (game = {}));
var game;
(function (game) {
    var ShootInitializeBehaviourFilter = /** @class */ (function (_super) {
        __extends(ShootInitializeBehaviourFilter, _super);
        function ShootInitializeBehaviourFilter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ShootInitializeBehaviourFilter;
    }(ut.EntityFilter));
    game.ShootInitializeBehaviourFilter = ShootInitializeBehaviourFilter;
    var ShootInitializeBehaviour = /** @class */ (function (_super) {
        __extends(ShootInitializeBehaviour, _super);
        function ShootInitializeBehaviour() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ShootInitializeBehaviour.prototype.OnEntityEnable = function () {
            var vec = this.data.velocity.velocity;
            vec.x = (game.InputSystem.clickFrom.x - game.InputSystem.clickTo.x) / 30;
            vec.y = (game.InputSystem.clickFrom.y - game.InputSystem.clickTo.y) / 30;
            this.data.velocity.velocity = vec;
        };
        return ShootInitializeBehaviour;
    }(ut.ComponentBehaviour));
    game.ShootInitializeBehaviour = ShootInitializeBehaviour;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var ShootNumberDisplaySystem = /** @class */ (function (_super) {
        __extends(ShootNumberDisplaySystem, _super);
        function ShootNumberDisplaySystem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.shootNumber = 0;
            return _this;
        }
        ShootNumberDisplaySystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.ShootPoint], function (shootPoint) {
                _this.shootNumber = shootPoint.shoots;
            });
            this.world.forEach([game.ShootNumberDisplay, ut.Text.Text2DRenderer], function (display, text) {
                text.text = "Shot: " + _this.shootNumber.toString();
            });
        };
        return ShootNumberDisplaySystem;
    }(ut.ComponentSystem));
    game.ShootNumberDisplaySystem = ShootNumberDisplaySystem;
})(game || (game = {}));
var game;
(function (game) {
    var VelocitySystem = /** @class */ (function (_super) {
        __extends(VelocitySystem, _super);
        function VelocitySystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        VelocitySystem.prototype.OnUpdate = function () {
            var dt = this.scheduler.deltaTime();
            this.world.forEach([ut.Core2D.TransformLocalPosition, ut.Physics2D.Velocity2D], function (transform, velocity) {
                var pos = transform.position;
                pos.x += velocity.velocity.x * dt;
                pos.y += velocity.velocity.y * dt;
                transform.position = pos;
            });
        };
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