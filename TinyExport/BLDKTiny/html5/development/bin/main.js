/**
 * TINY GENERATED CODE, DO NOT EDIT BY HAND
 * @project BLDKTiny
 */

console.log('runtime version: internal');

ut.importModule(ut.Core2D);
ut.importModule(ut.Math);
ut.importModule(ut);
ut.importModule(ut.Shared);
ut.importModule(ut.Core2D);
ut.importModule(ut.HTML);
ut.importModule(ut.Rendering);
ut.importModule(ut.Rendering);
ut.importModule(ut.HTML);
ut.importModule(ut.Core2D);
ut.importModule(ut.Rendering);
ut.importModule(ut.Rendering);
ut.importModule(ut.Core2D);
ut.importModule(ut.UILayout);
ut.importModule(ut.Text);
ut.importModule(ut.HTML);
ut.importModule(ut.Audio);
ut.importModule(ut.Physics2D);
ut.importModule(ut.HitBox2D);
ut.importModule(ut.Particles);
ut.importModule(ut.Interpolation);
ut.main = function() {
    game.PrinceBehaviourFilter._Components = [ut.Entity, 
        game.Prince, ut.Physics2D.Velocity2D
    ];
    game.PrinceBehaviourFilter.prototype.Read = function(world, entity) {
        this.prinice = world.getComponentData(entity, game.Prince);
        this.overlap = world.hasComponent(entity, ut.HitBox2D.HitBoxOverlapResults) ? world.getComponentData(entity, ut.HitBox2D.HitBoxOverlapResults) : undefined;
        this.velocity = world.getComponentData(entity, ut.Physics2D.Velocity2D);
    };
    game.PrinceBehaviourFilter.prototype.Reset = function() {
        this.prinice = undefined;
        this.overlap = undefined;
        this.velocity = undefined;
    };
    game.PrinceBehaviourFilter.prototype.Write = function(world, entity) {
        world.setComponentData(entity, this.prinice);
        if (this.overlap) { world.setOrAddComponentData(entity, this.overlap); }
        world.setComponentData(entity, this.velocity);
    };
    game.PrinceBehaviourFilter.prototype.ForEach = function(world, callback) {
        var _this = this;
        world.forEach(this.constructor._Components, function($entity, prinice, velocity) {
            _this.Read(world, $entity);
            callback($entity);
            if (world.exists($entity)) { _this.Write(world, $entity); }
        });
    };
    game.ShootInitializeBehaviourFilter._Components = [ut.Entity, 
        game.Shoot, ut.Physics2D.Velocity2D
    ];
    game.ShootInitializeBehaviourFilter.prototype.Read = function(world, entity) {
        this.shoot = world.getComponentData(entity, game.Shoot);
        this.velocity = world.getComponentData(entity, ut.Physics2D.Velocity2D);
    };
    game.ShootInitializeBehaviourFilter.prototype.Reset = function() {
        this.shoot = undefined;
        this.velocity = undefined;
    };
    game.ShootInitializeBehaviourFilter.prototype.Write = function(world, entity) {
        world.setComponentData(entity, this.shoot);
        world.setComponentData(entity, this.velocity);
    };
    game.ShootInitializeBehaviourFilter.prototype.ForEach = function(world, callback) {
        var _this = this;
        world.forEach(this.constructor._Components, function($entity, shoot, velocity) {
            _this.Read(world, $entity);
            callback($entity);
            if (world.exists($entity)) { _this.Write(world, $entity); }
        });
    };
    game.PrinceBehaviour.Instance = new game.PrinceBehaviour();
    game.PrinceBehaviour._StateType = game.PrinceBehaviour_State;
    game.PrinceBehaviour.prototype._GetFilter = function() { if (!this.data) { this.data = new game.PrinceBehaviourFilter(); } return this.data; }
    game.ShootInitializeBehaviour.Instance = new game.ShootInitializeBehaviour();
    game.ShootInitializeBehaviour._StateType = game.ShootInitializeBehaviour_State;
    game.ShootInitializeBehaviour.prototype._GetFilter = function() { if (!this.data) { this.data = new game.ShootInitializeBehaviourFilter(); } return this.data; }
    // Singleton world
    var world = new ut.World();

    // Schedule all systems
    var scheduler = world.scheduler();
    game.GoalCollisionSystemJS.update = new game.GoalCollisionSystem()._MakeSystemFn();
    game.ShootInitializeBehaviour_OnEntityEnableJS.update = game.ShootInitializeBehaviour.Instance._MakeOnEntityEnable();
    game.GravitySystemJS.update = new game.GravitySystem()._MakeSystemFn();
    game.InputSystemJS.update = new game.InputSystem()._MakeSystemFn();
    game.PrinceSpawnerSystemJS.update = new game.PrinceSpawnerSystem()._MakeSystemFn();
    game.ShootHitSystemJS.update = new game.ShootHitSystem()._MakeSystemFn();
    game.ShootNumberDisplaySystemJS.update = new game.ShootNumberDisplaySystem()._MakeSystemFn();
    game.VelocitySystemJS.update = new game.VelocitySystem()._MakeSystemFn();
    game.PrinceBehaviour_OnEntityUpdateJS.update = game.PrinceBehaviour.Instance._MakeOnEntityUpdate();
    scheduler.schedule(game.GoalCollisionSystemJS);
    scheduler.schedule(ut.HTML.InputHandler);
    scheduler.schedule(ut.HTML.AssetLoader);
    scheduler.schedule(ut.Core2D.SequencePlayerSystem);
    scheduler.schedule(ut.HitBox2D.HitBox2DSystem);
    scheduler.schedule(game.ShootInitializeBehaviour_OnEntityEnableJS);
    scheduler.schedule(ut.Shared.InputFence);
    scheduler.schedule(ut.Shared.UserCodeStart);
    scheduler.schedule(game.GravitySystemJS);
    scheduler.schedule(game.InputSystemJS);
    scheduler.schedule(game.PrinceSpawnerSystemJS);
    scheduler.schedule(game.ShootHitSystemJS);
    scheduler.schedule(game.ShootNumberDisplaySystemJS);
    scheduler.schedule(game.VelocitySystemJS);
    scheduler.schedule(game.PrinceBehaviour_OnEntityUpdateJS);
    scheduler.schedule(ut.Shared.UserCodeEnd);
    scheduler.schedule(ut.UILayout.UICanvasSystem);
    scheduler.schedule(ut.UILayout.UILayoutSystem);
    scheduler.schedule(ut.UILayout.SetSprite2DSizeSystem);
    scheduler.schedule(ut.UILayout.SetRectTransformSizeSystem);
    scheduler.schedule(ut.HTML.TextMeasurement);
    scheduler.schedule(ut.Particles.ParticleSystem);
    scheduler.schedule(ut.Shared.RenderingFence);
    scheduler.schedule(ut.Core2D.UpdateLocalTransformSystem);
    scheduler.schedule(ut.Core2D.UpdateWorldTransformSystem);
    scheduler.schedule(ut.Core2D.Sprite2DInitSystem);
    scheduler.schedule(ut.Text.Text2DInitSystem);
    scheduler.schedule(ut.Core2D.DisplayList);
    scheduler.schedule(ut.Shared.PlatformRenderingFence);
    scheduler.schedule(ut.HTML.RendererHTMLSwitchable);
    scheduler.schedule(ut.Rendering.RendererCanvas);
    scheduler.schedule(ut.Rendering.RendererGLWebGL);
    scheduler.schedule(ut.Audio.AudioSystem);
    scheduler.schedule(ut.Physics2D.Physics2DSystem);

    // Initialize all configuration data
    var c0 = world.getConfigData(ut.Core2D.DisplayInfo);
    c0.width = 1080;
    c0.height = 1920;
    c0.autoSizeToFrame = true;
    c0.renderMode = 1;
    world.setConfigData(c0);
    var c1 = world.getConfigData(ut.Audio.AudioConfig);
    world.setConfigData(c1);
    var c2 = world.getConfigData(ut.Physics2D.Physics2DConfig);
    var s0 = new ut.Math.Vector2();
    s0.x = 0;
    s0.y = -10;
    c2.gravity = s0;
    world.setConfigData(c2);

    // Create and initialize all resource entities
    UT_ASSETS_SETUP(world);

    // Create and initialize all startup entities
    ut.EntityGroup.instantiate(world, "game.GameScene");

    // Set up the WebSocket client
    ut._wsclient = ut._wsclient || {};
    ut._wsclient.world = world;

    // Start the player loop
    try { ut.Runtime.Service.run(world); } catch (e) { if (e !== 'SimulateInfiniteLoop') throw e; }
}
