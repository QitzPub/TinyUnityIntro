﻿/**
 * TINY GENERATED CODE, DO NOT EDIT BY HAND
 * @project SimpleInput
 */

entities.game.NewScene.name = "NewScene";
entities.game.NewScene.load = function(world) {
    var arch0 = world.createArchetype(this.Component, ut.Core2D.Camera2D, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.EditorExtensions.CameraCullingMask, ut.layers.Default)
    var e0 = world.createEntity(arch0);
    world.setEntityName(e0, "Camera");
    var arch1 = world.createArchetype(game.Gravity, game.Ground, game.Movement, game.Velocity, this.Component, ut.Core2D.Sprite2DRenderer, ut.Core2D.Sprite2DSequence, ut.Core2D.Sprite2DSequencePlayer, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.layers.Default)
    var e1 = world.createEntity(arch1);
    world.setEntityName(e1, "Square");
    var arch2 = world.createArchetype(this.Component, ut.Audio.AudioSource, ut.layers.Default)
    var e2 = world.createEntity(arch2);
    world.setEntityName(e2, "audio/voice1");
    var arch3 = world.createArchetype(this.Component, ut.Audio.AudioSource, ut.Core2D.TransformNode, ut.layers.Default)
    var e3 = world.createEntity(arch3);
    world.setEntityName(e3, "audio/voice2");
    var e4 = world.createEntity(arch3);
    world.setEntityName(e4, "audio/voice3");
    var e5 = world.createEntity(arch3);
    world.setEntityName(e5, "audio/voice4");
    var c0 = new ut.Core2D.TransformNode();
    world.setComponentData(e0, c0);
    var c1 = new ut.Core2D.TransformLocalPosition();
    var s0 = new ut.Math.Vector3();
    s0.x = 0;
    s0.y = 0;
    s0.z = 0;
    c1.position = s0;
    world.setComponentData(e0, c1);
    var c2 = new ut.Core2D.TransformLocalRotation();
    var s1 = new ut.Math.Quaternion();
    s1.x = 0;
    s1.y = 0;
    s1.z = 0;
    s1.w = 1;
    c2.rotation = s1;
    world.setComponentData(e0, c2);
    var c3 = new ut.Core2D.TransformLocalScale();
    var s2 = new ut.Math.Vector3();
    s2.x = 1;
    s2.y = 1;
    s2.z = 1;
    c3.scale = s2;
    world.setComponentData(e0, c3);
    var c4 = new ut.Core2D.Camera2D();
    c4.halfVerticalSize = 400;
    var s3 = new ut.Math.Rect();
    s3.x = 0;
    s3.y = 0;
    s3.width = 1;
    s3.height = 1;
    c4.rect = s3;
    var s4 = new ut.Core2D.Color();
    s4.r = 0.7075472;
    s4.g = 0.4080913;
    s4.b = 0.1368369;
    s4.a = 1;
    c4.backgroundColor = s4;
    c4.clearFlags = 1;
    c4.cullingMask = [ut.layers.Default.cid, ut.layers.TransparentFX.cid, ut.layers.IgnoreRaycast.cid, ut.layers.Water.cid, ut.layers.UI.cid, ut.layers.PostProcessing.cid, ut.layers.Cutscene.cid];
    c4.cullingMode = 2;
    world.setComponentData(e0, c4);
    var c5 = new ut.EditorExtensions.CameraCullingMask();
    c5.mask = -1;
    world.setComponentData(e0, c5);
    var c6 = new ut.Core2D.TransformNode();
    world.setComponentData(e1, c6);
    var c7 = new ut.Core2D.TransformLocalPosition();
    var s5 = new ut.Math.Vector3();
    s5.x = -450;
    s5.y = -200;
    s5.z = 0;
    c7.position = s5;
    world.setComponentData(e1, c7);
    var c8 = new ut.Core2D.TransformLocalRotation();
    var s6 = new ut.Math.Quaternion();
    s6.x = 0;
    s6.y = -0.9848078;
    s6.z = 0;
    s6.w = -0.1736481;
    c8.rotation = s6;
    world.setComponentData(e1, c8);
    var c9 = new ut.Core2D.TransformLocalScale();
    var s7 = new ut.Math.Vector3();
    s7.x = 400;
    s7.y = 400;
    s7.z = 1;
    c9.scale = s7;
    world.setComponentData(e1, c9);
    var c10 = new game.Velocity();
    var s8 = new ut.Math.Vector2();
    s8.x = 0;
    s8.y = 0;
    c10.velocity = s8;
    world.setComponentData(e1, c10);
    var c11 = new game.Gravity();
    var s9 = new ut.Math.Vector2();
    s9.x = 0;
    s9.y = -100;
    c11.gravity = s9;
    world.setComponentData(e1, c11);
    var c12 = new game.Movement();
    c12.speed = 40;
    world.setComponentData(e1, c12);
    var c13 = new game.Ground();
    c13.groundLevel = -200;
    world.setComponentData(e1, c13);
    var c14 = new ut.Core2D.Sprite2DRenderer();
    c14.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/AkaneRunning_0');
    var s10 = new ut.Core2D.Color();
    s10.r = 1;
    s10.g = 1;
    s10.b = 1;
    s10.a = 1;
    c14.color = s10;
    c14.blending = 0;
    world.setComponentData(e1, c14);
    var c15 = new ut.Core2D.Sprite2DSequencePlayer();
    c15.sequence = e1;
    c15.loop = 0;
    c15.speed = 1;
    world.setComponentData(e1, c15);
    var c16 = new ut.Core2D.Sprite2DSequence();
    var a0 = [ut.Entity.NONE, ut.Entity.NONE, ut.Entity.NONE, ut.Entity.NONE];
    a0[0] = ut.EntityLookupCache.getByName(world, 'assets/sprites/AkaneRunning_0');
    a0[1] = ut.EntityLookupCache.getByName(world, 'assets/sprites/AkaneRunning_1');
    a0[2] = ut.EntityLookupCache.getByName(world, 'assets/sprites/AkaneRunning_2');
    a0[3] = ut.EntityLookupCache.getByName(world, 'assets/sprites/AkaneRunning_3');
    c16.sprites = a0;
    c16.frameRate = 20;
    world.setComponentData(e1, c16);
    var c17 = new ut.Audio.AudioSource();
    c17.clip = ut.EntityLookupCache.getByName(world, 'assets/audioclips/voice1');
    c17.volume = 1;
    world.setComponentData(e2, c17);
    var c18 = new ut.Core2D.TransformNode();
    world.setComponentData(e3, c18);
    var c19 = new ut.Audio.AudioSource();
    c19.clip = ut.EntityLookupCache.getByName(world, 'assets/audioclips/voice2');
    c19.volume = 1;
    world.setComponentData(e3, c19);
    var c20 = new ut.Core2D.TransformNode();
    world.setComponentData(e4, c20);
    var c21 = new ut.Audio.AudioSource();
    c21.clip = ut.EntityLookupCache.getByName(world, 'assets/audioclips/voice3');
    c21.volume = 1;
    world.setComponentData(e4, c21);
    var c22 = new ut.Core2D.TransformNode();
    world.setComponentData(e5, c22);
    var c23 = new ut.Audio.AudioSource();
    c23.clip = ut.EntityLookupCache.getByName(world, 'assets/audioclips/voice4');
    c23.volume = 1;
    world.setComponentData(e5, c23);
    return [e0, e1, e2, e3, e4, e5];
}

