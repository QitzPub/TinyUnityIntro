﻿/**
 * TINY GENERATED CODE, DO NOT EDIT BY HAND
 * @project UILayoutDemo
 */

entities.game.Scene.name = "Scene";
entities.game.Scene.load = function(world) {
    var arch0 = world.createArchetype(this.Component, ut.Core2D.Camera2D, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.EditorExtensions.CameraCullingMask, ut.layers.Default)
    var e0 = world.createEntity(arch0);
    world.setEntityName(e0, "Camera");
    var arch1 = world.createArchetype(this.Component, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.layers.Default, ut.UILayout.RectTransform, ut.UILayout.UICanvas)
    var e1 = world.createEntity(arch1);
    world.setEntityName(e1, "Canvas");
    var arch2 = world.createArchetype(this.Component, ut.Core2D.LayerSorting, ut.Core2D.Sprite2DRenderer, ut.Core2D.Sprite2DRendererOptions, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.layers.Default, ut.UILayout.RectTransform)
    var e2 = world.createEntity(arch2);
    world.setEntityName(e2, "Background");
    var e3 = world.createEntity(arch2);
    world.setEntityName(e3, "Window");
    var e4 = world.createEntity(arch2);
    world.setEntityName(e4, "Header");
    var e5 = world.createEntity(arch2);
    world.setEntityName(e5, "Button");
    var e6 = world.createEntity(arch2);
    world.setEntityName(e6, "Dropdown");
    var e7 = world.createEntity(arch2);
    world.setEntityName(e7, "Button");
    var e8 = world.createEntity(arch2);
    world.setEntityName(e8, "Button");
    var e9 = world.createEntity(arch2);
    world.setEntityName(e9, "Button");
    var e10 = world.createEntity(arch2);
    world.setEntityName(e10, "Button");
    var e11 = world.createEntity(arch2);
    world.setEntityName(e11, "Button");
    var e12 = world.createEntity(arch2);
    world.setEntityName(e12, "Button");
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
    c4.halfVerticalSize = 200;
    var s3 = new ut.Math.Rect();
    s3.x = 0;
    s3.y = 0;
    s3.width = 1;
    s3.height = 1;
    c4.rect = s3;
    var s4 = new ut.Core2D.Color();
    s4.r = 0;
    s4.g = 0;
    s4.b = 0;
    s4.a = 1;
    c4.backgroundColor = s4;
    c4.clearFlags = 1;
    c4.depth = -1;
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
    s5.x = 0;
    s5.y = 0;
    s5.z = 0;
    c7.position = s5;
    world.setComponentData(e1, c7);
    var c8 = new ut.Core2D.TransformLocalRotation();
    var s6 = new ut.Math.Quaternion();
    s6.x = 0;
    s6.y = 0;
    s6.z = 0;
    s6.w = 1;
    c8.rotation = s6;
    world.setComponentData(e1, c8);
    var c9 = new ut.Core2D.TransformLocalScale();
    var s7 = new ut.Math.Vector3();
    s7.x = 1;
    s7.y = 1;
    s7.z = 1;
    c9.scale = s7;
    world.setComponentData(e1, c9);
    var c10 = new ut.UILayout.RectTransform();
    var s8 = new ut.Math.Vector2();
    s8.x = 0;
    s8.y = 0;
    c10.anchorMin = s8;
    var s9 = new ut.Math.Vector2();
    s9.x = 1;
    s9.y = 1;
    c10.anchorMax = s9;
    var s10 = new ut.Math.Vector2();
    s10.x = 0;
    s10.y = 0;
    c10.sizeDelta = s10;
    var s11 = new ut.Math.Vector2();
    s11.x = 0;
    s11.y = 0;
    c10.anchoredPosition = s11;
    var s12 = new ut.Math.Vector2();
    s12.x = 0.5;
    s12.y = 0.5;
    c10.pivot = s12;
    world.setComponentData(e1, c10);
    var c11 = new ut.UILayout.UICanvas();
    c11.camera = e0;
    c11.uiScaleMode = 1;
    var s13 = new ut.Math.Vector2();
    s13.x = 1920;
    s13.y = 1080;
    c11.referenceResolution = s13;
    world.setComponentData(e1, c11);
    var c12 = new ut.Core2D.TransformNode();
    c12.parent = e1;
    world.setComponentData(e2, c12);
    var c13 = new ut.Core2D.TransformLocalPosition();
    var s14 = new ut.Math.Vector3();
    s14.x = 0;
    s14.y = 0;
    s14.z = 0;
    c13.position = s14;
    world.setComponentData(e2, c13);
    var c14 = new ut.Core2D.TransformLocalRotation();
    var s15 = new ut.Math.Quaternion();
    s15.x = 0;
    s15.y = 0;
    s15.z = 0;
    s15.w = 1;
    c14.rotation = s15;
    world.setComponentData(e2, c14);
    var c15 = new ut.Core2D.TransformLocalScale();
    var s16 = new ut.Math.Vector3();
    s16.x = 1;
    s16.y = 1;
    s16.z = 1;
    c15.scale = s16;
    world.setComponentData(e2, c15);
    var c16 = new ut.UILayout.RectTransform();
    var s17 = new ut.Math.Vector2();
    s17.x = 0;
    s17.y = 0;
    c16.anchorMin = s17;
    var s18 = new ut.Math.Vector2();
    s18.x = 1;
    s18.y = 1;
    c16.anchorMax = s18;
    var s19 = new ut.Math.Vector2();
    s19.x = 0;
    s19.y = 0;
    c16.sizeDelta = s19;
    var s20 = new ut.Math.Vector2();
    s20.x = 0;
    s20.y = 0;
    c16.anchoredPosition = s20;
    var s21 = new ut.Math.Vector2();
    s21.x = 0.5;
    s21.y = 0.5;
    c16.pivot = s21;
    world.setComponentData(e2, c16);
    var c17 = new ut.Core2D.Sprite2DRenderer();
    c17.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/UIpack_36');
    var s22 = new ut.Core2D.Color();
    s22.r = 1;
    s22.g = 1;
    s22.b = 1;
    s22.a = 1;
    c17.color = s22;
    c17.blending = 0;
    world.setComponentData(e2, c17);
    var c18 = new ut.Core2D.Sprite2DRendererOptions();
    var s23 = new ut.Math.Vector2();
    s23.x = 794;
    s23.y = 563;
    c18.size = s23;
    c18.drawMode = 2;
    world.setComponentData(e2, c18);
    var c19 = new ut.Core2D.LayerSorting();
    world.setComponentData(e2, c19);
    var c20 = new ut.Core2D.TransformNode();
    c20.parent = e1;
    world.setComponentData(e3, c20);
    var c21 = new ut.Core2D.TransformLocalPosition();
    var s24 = new ut.Math.Vector3();
    s24.x = 0;
    s24.y = 0;
    s24.z = 0;
    c21.position = s24;
    world.setComponentData(e3, c21);
    var c22 = new ut.Core2D.TransformLocalRotation();
    var s25 = new ut.Math.Quaternion();
    s25.x = 0;
    s25.y = 0;
    s25.z = 0;
    s25.w = 1;
    c22.rotation = s25;
    world.setComponentData(e3, c22);
    var c23 = new ut.Core2D.TransformLocalScale();
    var s26 = new ut.Math.Vector3();
    s26.x = 0.5;
    s26.y = 0.75;
    s26.z = 1;
    c23.scale = s26;
    world.setComponentData(e3, c23);
    var c24 = new ut.UILayout.RectTransform();
    var s27 = new ut.Math.Vector2();
    s27.x = 0.5;
    s27.y = 0.5;
    c24.anchorMin = s27;
    var s28 = new ut.Math.Vector2();
    s28.x = 0.5;
    s28.y = 0.5;
    c24.anchorMax = s28;
    var s29 = new ut.Math.Vector2();
    s29.x = 1920;
    s29.y = 1150;
    c24.sizeDelta = s29;
    var s30 = new ut.Math.Vector2();
    s30.x = 0;
    s30.y = 0;
    c24.anchoredPosition = s30;
    var s31 = new ut.Math.Vector2();
    s31.x = 0.5;
    s31.y = 0.5;
    c24.pivot = s31;
    world.setComponentData(e3, c24);
    var c25 = new ut.Core2D.LayerSorting();
    c25.order = 1;
    world.setComponentData(e3, c25);
    var c26 = new ut.Core2D.Sprite2DRenderer();
    c26.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/UIpack_35');
    var s32 = new ut.Core2D.Color();
    s32.r = 1;
    s32.g = 1;
    s32.b = 1;
    s32.a = 1;
    c26.color = s32;
    c26.blending = 0;
    world.setComponentData(e3, c26);
    var c27 = new ut.Core2D.Sprite2DRendererOptions();
    var s33 = new ut.Math.Vector2();
    s33.x = 1920;
    s33.y = 1150;
    c27.size = s33;
    c27.drawMode = 2;
    world.setComponentData(e3, c27);
    var c28 = new ut.Core2D.TransformNode();
    c28.parent = e3;
    world.setComponentData(e4, c28);
    var c29 = new ut.Core2D.TransformLocalPosition();
    var s34 = new ut.Math.Vector3();
    s34.x = 0;
    s34.y = 476.55;
    s34.z = 0;
    c29.position = s34;
    world.setComponentData(e4, c29);
    var c30 = new ut.Core2D.TransformLocalRotation();
    var s35 = new ut.Math.Quaternion();
    s35.x = 0;
    s35.y = 0;
    s35.z = 0;
    s35.w = 1;
    c30.rotation = s35;
    world.setComponentData(e4, c30);
    var c31 = new ut.Core2D.TransformLocalScale();
    var s36 = new ut.Math.Vector3();
    s36.x = 1;
    s36.y = 1;
    s36.z = 1;
    c31.scale = s36;
    world.setComponentData(e4, c31);
    var c32 = new ut.UILayout.RectTransform();
    var s37 = new ut.Math.Vector2();
    s37.x = 0.5;
    s37.y = 1;
    c32.anchorMin = s37;
    var s38 = new ut.Math.Vector2();
    s38.x = 0.5;
    s38.y = 1;
    c32.anchorMax = s38;
    var s39 = new ut.Math.Vector2();
    s39.x = 1920;
    s39.y = 212.9;
    c32.sizeDelta = s39;
    var s40 = new ut.Math.Vector2();
    s40.x = 0;
    s40.y = -106.45;
    c32.anchoredPosition = s40;
    var s41 = new ut.Math.Vector2();
    s41.x = 0.5;
    s41.y = 0.5;
    c32.pivot = s41;
    world.setComponentData(e4, c32);
    var c33 = new ut.Core2D.Sprite2DRenderer();
    c33.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/UIpack_33');
    var s42 = new ut.Core2D.Color();
    s42.r = 1;
    s42.g = 1;
    s42.b = 1;
    s42.a = 1;
    c33.color = s42;
    c33.blending = 0;
    world.setComponentData(e4, c33);
    var c34 = new ut.Core2D.Sprite2DRendererOptions();
    var s43 = new ut.Math.Vector2();
    s43.x = 1920;
    s43.y = 212.9;
    c34.size = s43;
    c34.drawMode = 2;
    world.setComponentData(e4, c34);
    var c35 = new ut.Core2D.LayerSorting();
    c35.order = 2;
    world.setComponentData(e4, c35);
    var c36 = new ut.Core2D.TransformNode();
    c36.parent = e4;
    world.setComponentData(e5, c36);
    var c37 = new ut.Core2D.TransformLocalPosition();
    var s44 = new ut.Math.Vector3();
    s44.x = 788.1;
    s44.y = 2.350082;
    s44.z = 0;
    c37.position = s44;
    world.setComponentData(e5, c37);
    var c38 = new ut.Core2D.TransformLocalRotation();
    var s45 = new ut.Math.Quaternion();
    s45.x = 0;
    s45.y = 0;
    s45.z = 0;
    s45.w = 1;
    c38.rotation = s45;
    world.setComponentData(e5, c38);
    var c39 = new ut.Core2D.TransformLocalScale();
    var s46 = new ut.Math.Vector3();
    s46.x = 1;
    s46.y = 1;
    s46.z = 1;
    c39.scale = s46;
    world.setComponentData(e5, c39);
    var c40 = new ut.UILayout.RectTransform();
    var s47 = new ut.Math.Vector2();
    s47.x = 1;
    s47.y = 1;
    c40.anchorMin = s47;
    var s48 = new ut.Math.Vector2();
    s48.x = 1;
    s48.y = 1;
    c40.anchorMax = s48;
    var s49 = new ut.Math.Vector2();
    s49.x = 206.6;
    s49.y = 127.1;
    c40.sizeDelta = s49;
    var s50 = new ut.Math.Vector2();
    s50.x = -171.9;
    s50.y = -104.0999;
    c40.anchoredPosition = s50;
    var s51 = new ut.Math.Vector2();
    s51.x = 0.5;
    s51.y = 0.5;
    c40.pivot = s51;
    world.setComponentData(e5, c40);
    var c41 = new ut.Core2D.Sprite2DRenderer();
    c41.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/UIpack_68');
    var s52 = new ut.Core2D.Color();
    s52.r = 1;
    s52.g = 1;
    s52.b = 1;
    s52.a = 1;
    c41.color = s52;
    c41.blending = 0;
    world.setComponentData(e5, c41);
    var c42 = new ut.Core2D.Sprite2DRendererOptions();
    var s53 = new ut.Math.Vector2();
    s53.x = 206.6;
    s53.y = 127.1;
    c42.size = s53;
    c42.drawMode = 2;
    world.setComponentData(e5, c42);
    var c43 = new ut.Core2D.LayerSorting();
    c43.order = 3;
    world.setComponentData(e5, c43);
    var c44 = new ut.Core2D.TransformNode();
    c44.parent = e3;
    world.setComponentData(e6, c44);
    var c45 = new ut.Core2D.TransformLocalPosition();
    var s54 = new ut.Math.Vector3();
    s54.x = 10.55;
    s54.y = 34;
    s54.z = 0;
    c45.position = s54;
    world.setComponentData(e6, c45);
    var c46 = new ut.Core2D.TransformLocalRotation();
    var s55 = new ut.Math.Quaternion();
    s55.x = 0;
    s55.y = 0;
    s55.z = 0;
    s55.w = 1;
    c46.rotation = s55;
    world.setComponentData(e6, c46);
    var c47 = new ut.Core2D.TransformLocalScale();
    var s56 = new ut.Math.Vector3();
    s56.x = 0.7300001;
    s56.y = 1;
    s56.z = 1;
    c47.scale = s56;
    world.setComponentData(e6, c47);
    var c48 = new ut.UILayout.RectTransform();
    var s57 = new ut.Math.Vector2();
    s57.x = 0.5;
    s57.y = 0.5;
    c48.anchorMin = s57;
    var s58 = new ut.Math.Vector2();
    s58.x = 0.5;
    s58.y = 0.5;
    c48.anchorMax = s58;
    var s59 = new ut.Math.Vector2();
    s59.x = 1941.1;
    s59.y = 548.2;
    c48.sizeDelta = s59;
    var s60 = new ut.Math.Vector2();
    s60.x = 10.55;
    s60.y = 34;
    c48.anchoredPosition = s60;
    var s61 = new ut.Math.Vector2();
    s61.x = 0.5;
    s61.y = 0.5;
    c48.pivot = s61;
    world.setComponentData(e6, c48);
    var c49 = new ut.Core2D.Sprite2DRenderer();
    c49.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/UIpack_64');
    var s62 = new ut.Core2D.Color();
    s62.r = 1;
    s62.g = 1;
    s62.b = 1;
    s62.a = 1;
    c49.color = s62;
    c49.blending = 0;
    world.setComponentData(e6, c49);
    var c50 = new ut.Core2D.Sprite2DRendererOptions();
    var s63 = new ut.Math.Vector2();
    s63.x = 1941.1;
    s63.y = 548.2;
    c50.size = s63;
    c50.drawMode = 2;
    world.setComponentData(e6, c50);
    var c51 = new ut.Core2D.LayerSorting();
    c51.order = 2;
    world.setComponentData(e6, c51);
    var c52 = new ut.Core2D.TransformNode();
    c52.parent = e6;
    world.setComponentData(e7, c52);
    var c53 = new ut.Core2D.TransformLocalPosition();
    var s64 = new ut.Math.Vector3();
    s64.x = 0;
    s64.y = 187.35;
    s64.z = 0;
    c53.position = s64;
    world.setComponentData(e7, c53);
    var c54 = new ut.Core2D.TransformLocalRotation();
    var s65 = new ut.Math.Quaternion();
    s65.x = 0;
    s65.y = 0;
    s65.z = 0;
    s65.w = 1;
    c54.rotation = s65;
    world.setComponentData(e7, c54);
    var c55 = new ut.Core2D.TransformLocalScale();
    var s66 = new ut.Math.Vector3();
    s66.x = 1.013699;
    s66.y = 1;
    s66.z = 1;
    c55.scale = s66;
    world.setComponentData(e7, c55);
    var c56 = new ut.UILayout.RectTransform();
    var s67 = new ut.Math.Vector2();
    s67.x = 0;
    s67.y = 1;
    c56.anchorMin = s67;
    var s68 = new ut.Math.Vector2();
    s68.x = 1;
    s68.y = 1;
    c56.anchorMax = s68;
    var s69 = new ut.Math.Vector2();
    s69.x = 0;
    s69.y = 173.5;
    c56.sizeDelta = s69;
    var s70 = new ut.Math.Vector2();
    s70.x = 0;
    s70.y = -86.75;
    c56.anchoredPosition = s70;
    var s71 = new ut.Math.Vector2();
    s71.x = 0.5;
    s71.y = 0.5;
    c56.pivot = s71;
    world.setComponentData(e7, c56);
    var c57 = new ut.Core2D.Sprite2DRenderer();
    c57.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/UIpack_5');
    var s72 = new ut.Core2D.Color();
    s72.r = 1;
    s72.g = 1;
    s72.b = 1;
    s72.a = 1;
    c57.color = s72;
    c57.blending = 0;
    world.setComponentData(e7, c57);
    var c58 = new ut.Core2D.Sprite2DRendererOptions();
    var s73 = new ut.Math.Vector2();
    s73.x = 1941.1;
    s73.y = 173.5;
    c58.size = s73;
    c58.drawMode = 2;
    world.setComponentData(e7, c58);
    var c59 = new ut.Core2D.LayerSorting();
    c59.order = 3;
    world.setComponentData(e7, c59);
    var c60 = new ut.Core2D.TransformNode();
    c60.parent = e7;
    world.setComponentData(e8, c60);
    var c61 = new ut.Core2D.TransformLocalPosition();
    var s74 = new ut.Math.Vector3();
    s74.x = 730.5501;
    s74.y = 0;
    s74.z = 0;
    c61.position = s74;
    world.setComponentData(e8, c61);
    var c62 = new ut.Core2D.TransformLocalRotation();
    var s75 = new ut.Math.Quaternion();
    s75.x = 0;
    s75.y = 0;
    s75.z = 0;
    s75.w = 1;
    c62.rotation = s75;
    world.setComponentData(e8, c62);
    var c63 = new ut.Core2D.TransformLocalScale();
    var s76 = new ut.Math.Vector3();
    s76.x = 1;
    s76.y = 1;
    s76.z = 1;
    c63.scale = s76;
    world.setComponentData(e8, c63);
    var c64 = new ut.UILayout.RectTransform();
    var s77 = new ut.Math.Vector2();
    s77.x = 1;
    s77.y = 1;
    c64.anchorMin = s77;
    var s78 = new ut.Math.Vector2();
    s78.x = 1;
    s78.y = 1;
    c64.anchorMax = s78;
    var s79 = new ut.Math.Vector2();
    s79.x = 225.6;
    s79.y = 109.8;
    c64.sizeDelta = s79;
    var s80 = new ut.Math.Vector2();
    s80.x = -239.9999;
    s80.y = -86.75;
    c64.anchoredPosition = s80;
    var s81 = new ut.Math.Vector2();
    s81.x = 0.5;
    s81.y = 0.5;
    c64.pivot = s81;
    world.setComponentData(e8, c64);
    var c65 = new ut.Core2D.Sprite2DRenderer();
    c65.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/UIpack_98');
    var s82 = new ut.Core2D.Color();
    s82.r = 1;
    s82.g = 1;
    s82.b = 1;
    s82.a = 1;
    c65.color = s82;
    c65.blending = 0;
    world.setComponentData(e8, c65);
    var c66 = new ut.Core2D.Sprite2DRendererOptions();
    var s83 = new ut.Math.Vector2();
    s83.x = 225.6;
    s83.y = 109.8;
    c66.size = s83;
    c66.drawMode = 2;
    world.setComponentData(e8, c66);
    var c67 = new ut.Core2D.LayerSorting();
    c67.order = 4;
    world.setComponentData(e8, c67);
    var c68 = new ut.Core2D.TransformNode();
    c68.parent = e3;
    world.setComponentData(e9, c68);
    var c69 = new ut.Core2D.TransformLocalPosition();
    var s84 = new ut.Math.Vector3();
    s84.x = -438.9999;
    s84.y = -379.34;
    s84.z = 0;
    c69.position = s84;
    world.setComponentData(e9, c69);
    var c70 = new ut.Core2D.TransformLocalRotation();
    var s85 = new ut.Math.Quaternion();
    s85.x = 0;
    s85.y = 0;
    s85.z = 0;
    s85.w = 1;
    c70.rotation = s85;
    world.setComponentData(e9, c70);
    var c71 = new ut.Core2D.TransformLocalScale();
    var s86 = new ut.Math.Vector3();
    s86.x = 2;
    s86.y = 1;
    s86.z = 1;
    c71.scale = s86;
    world.setComponentData(e9, c71);
    var c72 = new ut.UILayout.RectTransform();
    var s87 = new ut.Math.Vector2();
    s87.x = 0;
    s87.y = 0;
    c72.anchorMin = s87;
    var s88 = new ut.Math.Vector2();
    s88.x = 0;
    s88.y = 0;
    c72.anchorMax = s88;
    var s89 = new ut.Math.Vector2();
    s89.x = 248.6;
    s89.y = 156.1;
    c72.sizeDelta = s89;
    var s90 = new ut.Math.Vector2();
    s90.x = 521;
    s90.y = 204;
    c72.anchoredPosition = s90;
    var s91 = new ut.Math.Vector2();
    s91.x = 0.5;
    s91.y = 0.5;
    c72.pivot = s91;
    world.setComponentData(e9, c72);
    var c73 = new ut.Core2D.Sprite2DRenderer();
    c73.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/UIpack_26');
    var s92 = new ut.Core2D.Color();
    s92.r = 1;
    s92.g = 1;
    s92.b = 1;
    s92.a = 1;
    c73.color = s92;
    c73.blending = 0;
    world.setComponentData(e9, c73);
    var c74 = new ut.Core2D.Sprite2DRendererOptions();
    var s93 = new ut.Math.Vector2();
    s93.x = 248.6;
    s93.y = 156.1;
    c74.size = s93;
    c74.drawMode = 2;
    world.setComponentData(e9, c74);
    var c75 = new ut.Core2D.LayerSorting();
    c75.order = 4;
    world.setComponentData(e9, c75);
    var c76 = new ut.Core2D.TransformNode();
    c76.parent = e9;
    world.setComponentData(e10, c76);
    var c77 = new ut.Core2D.TransformLocalPosition();
    var s94 = new ut.Math.Vector3();
    s94.x = -1.525879E-05;
    s94.y = -6.103516E-05;
    s94.z = 0;
    c77.position = s94;
    world.setComponentData(e10, c77);
    var c78 = new ut.Core2D.TransformLocalRotation();
    var s95 = new ut.Math.Quaternion();
    s95.x = 0;
    s95.y = 0;
    s95.z = 0;
    s95.w = 1;
    c78.rotation = s95;
    world.setComponentData(e10, c78);
    var c79 = new ut.Core2D.TransformLocalScale();
    var s96 = new ut.Math.Vector3();
    s96.x = 0.5;
    s96.y = 1;
    s96.z = 1;
    c79.scale = s96;
    world.setComponentData(e10, c79);
    var c80 = new ut.UILayout.RectTransform();
    var s97 = new ut.Math.Vector2();
    s97.x = 0.5;
    s97.y = 0.5;
    c80.anchorMin = s97;
    var s98 = new ut.Math.Vector2();
    s98.x = 0.5;
    s98.y = 0.5;
    c80.anchorMax = s98;
    var s99 = new ut.Math.Vector2();
    s99.x = 163.53;
    s99.y = 98.2;
    c80.sizeDelta = s99;
    var s100 = new ut.Math.Vector2();
    s100.x = -1.525879E-05;
    s100.y = -6.103516E-05;
    c80.anchoredPosition = s100;
    var s101 = new ut.Math.Vector2();
    s101.x = 0.5;
    s101.y = 0.5;
    c80.pivot = s101;
    world.setComponentData(e10, c80);
    var c81 = new ut.Core2D.Sprite2DRenderer();
    c81.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/UIpack_115');
    var s102 = new ut.Core2D.Color();
    s102.r = 1;
    s102.g = 1;
    s102.b = 1;
    s102.a = 1;
    c81.color = s102;
    c81.blending = 0;
    world.setComponentData(e10, c81);
    var c82 = new ut.Core2D.Sprite2DRendererOptions();
    var s103 = new ut.Math.Vector2();
    s103.x = 163.53;
    s103.y = 98.2;
    c82.size = s103;
    c82.drawMode = 2;
    world.setComponentData(e10, c82);
    var c83 = new ut.Core2D.LayerSorting();
    c83.order = 5;
    world.setComponentData(e10, c83);
    var c84 = new ut.Core2D.TransformNode();
    c84.parent = e3;
    world.setComponentData(e11, c84);
    var c85 = new ut.Core2D.TransformLocalPosition();
    var s104 = new ut.Math.Vector3();
    s104.x = 452.9999;
    s104.y = -379.34;
    s104.z = 0;
    c85.position = s104;
    world.setComponentData(e11, c85);
    var c86 = new ut.Core2D.TransformLocalRotation();
    var s105 = new ut.Math.Quaternion();
    s105.x = 0;
    s105.y = 0;
    s105.z = 0;
    s105.w = 1;
    c86.rotation = s105;
    world.setComponentData(e11, c86);
    var c87 = new ut.Core2D.TransformLocalScale();
    var s106 = new ut.Math.Vector3();
    s106.x = 2;
    s106.y = 1;
    s106.z = 1;
    c87.scale = s106;
    world.setComponentData(e11, c87);
    var c88 = new ut.UILayout.RectTransform();
    var s107 = new ut.Math.Vector2();
    s107.x = 1;
    s107.y = 0;
    c88.anchorMin = s107;
    var s108 = new ut.Math.Vector2();
    s108.x = 1;
    s108.y = 0;
    c88.anchorMax = s108;
    var s109 = new ut.Math.Vector2();
    s109.x = 248.6001;
    s109.y = 156.1;
    c88.sizeDelta = s109;
    var s110 = new ut.Math.Vector2();
    s110.x = -507;
    s110.y = 204;
    c88.anchoredPosition = s110;
    var s111 = new ut.Math.Vector2();
    s111.x = 0.5;
    s111.y = 0.5;
    c88.pivot = s111;
    world.setComponentData(e11, c88);
    var c89 = new ut.Core2D.Sprite2DRenderer();
    c89.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/UIpack_15');
    var s112 = new ut.Core2D.Color();
    s112.r = 1;
    s112.g = 1;
    s112.b = 1;
    s112.a = 1;
    c89.color = s112;
    c89.blending = 0;
    world.setComponentData(e11, c89);
    var c90 = new ut.Core2D.Sprite2DRendererOptions();
    var s113 = new ut.Math.Vector2();
    s113.x = 248.6001;
    s113.y = 156.1;
    c90.size = s113;
    c90.drawMode = 2;
    world.setComponentData(e11, c90);
    var c91 = new ut.Core2D.LayerSorting();
    c91.order = 4;
    world.setComponentData(e11, c91);
    var c92 = new ut.Core2D.TransformNode();
    c92.parent = e11;
    world.setComponentData(e12, c92);
    var c93 = new ut.Core2D.TransformLocalPosition();
    var s114 = new ut.Math.Vector3();
    s114.x = 0;
    s114.y = 0;
    s114.z = 0;
    c93.position = s114;
    world.setComponentData(e12, c93);
    var c94 = new ut.Core2D.TransformLocalRotation();
    var s115 = new ut.Math.Quaternion();
    s115.x = 0;
    s115.y = 0;
    s115.z = 0;
    s115.w = 1;
    c94.rotation = s115;
    world.setComponentData(e12, c94);
    var c95 = new ut.Core2D.TransformLocalScale();
    var s116 = new ut.Math.Vector3();
    s116.x = 0.5;
    s116.y = 1;
    s116.z = 1;
    c95.scale = s116;
    world.setComponentData(e12, c95);
    var c96 = new ut.UILayout.RectTransform();
    var s117 = new ut.Math.Vector2();
    s117.x = 0.5;
    s117.y = 0.5;
    c96.anchorMin = s117;
    var s118 = new ut.Math.Vector2();
    s118.x = 0.5;
    s118.y = 0.5;
    c96.anchorMax = s118;
    var s119 = new ut.Math.Vector2();
    s119.x = 168.1;
    s119.y = 91.5;
    c96.sizeDelta = s119;
    var s120 = new ut.Math.Vector2();
    s120.x = 0;
    s120.y = 0;
    c96.anchoredPosition = s120;
    var s121 = new ut.Math.Vector2();
    s121.x = 0.5;
    s121.y = 0.5;
    c96.pivot = s121;
    world.setComponentData(e12, c96);
    var c97 = new ut.Core2D.Sprite2DRenderer();
    c97.sprite = ut.EntityLookupCache.getByName(world, 'assets/sprites/UIpack_86');
    var s122 = new ut.Core2D.Color();
    s122.r = 1;
    s122.g = 1;
    s122.b = 1;
    s122.a = 1;
    c97.color = s122;
    c97.blending = 0;
    world.setComponentData(e12, c97);
    var c98 = new ut.Core2D.Sprite2DRendererOptions();
    var s123 = new ut.Math.Vector2();
    s123.x = 168.1;
    s123.y = 91.5;
    c98.size = s123;
    c98.drawMode = 2;
    world.setComponentData(e12, c98);
    var c99 = new ut.Core2D.LayerSorting();
    c99.order = 5;
    world.setComponentData(e12, c99);
    return [e0, e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12];
}

