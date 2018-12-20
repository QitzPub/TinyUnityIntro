/**
 * TINY GENERATED CODE, DO NOT EDIT BY HAND
 * @project Tiny1
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
ut.main = function() {
    game.NewBehaviourFilter._Components = [ut.Entity, 
        ut.Core2D.TransformNode
    ];
    game.NewBehaviourFilter.prototype.Read = function(world, entity) {
        this.node = world.getComponentData(entity, ut.Core2D.TransformNode);
        this.position = world.hasComponent(entity, ut.Core2D.TransformLocalPosition) ? world.getComponentData(entity, ut.Core2D.TransformLocalPosition) : undefined;
        this.rotation = world.hasComponent(entity, ut.Core2D.TransformLocalRotation) ? world.getComponentData(entity, ut.Core2D.TransformLocalRotation) : undefined;
        this.scale = world.hasComponent(entity, ut.Core2D.TransformLocalScale) ? world.getComponentData(entity, ut.Core2D.TransformLocalScale) : undefined;
    };
    game.NewBehaviourFilter.prototype.Reset = function() {
        this.node = undefined;
        this.position = undefined;
        this.rotation = undefined;
        this.scale = undefined;
    };
    game.NewBehaviourFilter.prototype.Write = function(world, entity) {
        world.setComponentData(entity, this.node);
        if (this.position) { world.setOrAddComponentData(entity, this.position); }
        if (this.rotation) { world.setOrAddComponentData(entity, this.rotation); }
        if (this.scale) { world.setOrAddComponentData(entity, this.scale); }
    };
    game.NewBehaviourFilter.prototype.ForEach = function(world, callback) {
        var _this = this;
        world.forEach(this.constructor._Components, function($entity, node) {
            _this.Read(world, $entity);
            callback($entity);
            if (world.exists($entity)) { _this.Write(world, $entity); }
        });
    };
    game.NewBehaviour.Instance = new game.NewBehaviour();
    game.NewBehaviour._StateType = game.NewBehaviour_State;
    game.NewBehaviour.prototype._GetFilter = function() { if (!this.data) { this.data = new game.NewBehaviourFilter(); } return this.data; }
    // Singleton world
    var world = new ut.World();

    // Schedule all systems
    var scheduler = world.scheduler();
    game.NewSystemJS.update = new game.NewSystem()._MakeSystemFn();
    scheduler.schedule(game.NewSystemJS);
    scheduler.schedule(ut.HTML.InputHandler);
    scheduler.schedule(ut.HTML.AssetLoader);
    scheduler.schedule(ut.Core2D.SequencePlayerSystem);
    scheduler.schedule(ut.Shared.InputFence);
    scheduler.schedule(ut.Shared.UserCodeStart);
    scheduler.schedule(ut.Shared.UserCodeEnd);
    scheduler.schedule(ut.UILayout.UICanvasSystem);
    scheduler.schedule(ut.UILayout.UILayoutSystem);
    scheduler.schedule(ut.UILayout.SetSprite2DSizeSystem);
    scheduler.schedule(ut.UILayout.SetRectTransformSizeSystem);
    scheduler.schedule(ut.Shared.RenderingFence);
    scheduler.schedule(ut.Core2D.UpdateLocalTransformSystem);
    scheduler.schedule(ut.Core2D.UpdateWorldTransformSystem);
    scheduler.schedule(ut.Core2D.Sprite2DInitSystem);
    scheduler.schedule(ut.Core2D.DisplayList);
    scheduler.schedule(ut.Shared.PlatformRenderingFence);
    scheduler.schedule(ut.HTML.RendererHTMLSwitchable);
    scheduler.schedule(ut.Rendering.RendererCanvas);
    scheduler.schedule(ut.Rendering.RendererGLWebGL);

    // Initialize all configuration data
    var c0 = world.getConfigData(ut.Core2D.DisplayInfo);
    c0.width = 1920;
    c0.height = 1080;
    c0.autoSizeToFrame = true;
    c0.renderMode = 0;
    world.setConfigData(c0);

    // Create and initialize all resource entities
    UT_ASSETS_SETUP(world);

    // Create and initialize all startup entities
    ut.EntityGroup.instantiate(world, "game.NewEntityGroup");

    // Set up the WebSocket client
    ut._wsclient = ut._wsclient || {};
    ut._wsclient.world = world;

    // Start the player loop
    try { ut.Runtime.Service.run(world); } catch (e) { if (e !== 'SimulateInfiniteLoop') throw e; }
}
