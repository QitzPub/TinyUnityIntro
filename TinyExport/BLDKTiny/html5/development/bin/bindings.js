/*
 * AUTO-GENERATED, DO NOT EDIT BY HAND
 */
// In order to process bindings, we first need type registry from compiled code to be available.
ut.meta.registerTypes();
var game = game || {};
game.GameStateEnum = {
  NotInitialized: 0,
  Normal: 1,
  Stretching: 2,
  Moving: 3
};
game.GameStateEnum._typeDesc = (function() {
  var enumType = ut.meta.getType('int32');
  return ut.meta.allocType(6, 'game.GameStateEnum', 4, [
    {name: 'NotInitialized', offset: 0, type: enumType},
    {name: 'Normal', offset: 1, type: enumType},
    {name: 'Stretching', offset: 2, type: enumType},
    {name: 'Moving', offset: 3, type: enumType}
  ]);
})();
game.PrinceMoveState = {
  Flying: 0,
  Grounding: 1,
  Climbing: 2
};
game.PrinceMoveState._typeDesc = (function() {
  var enumType = ut.meta.getType('int32');
  return ut.meta.allocType(6, 'game.PrinceMoveState', 4, [
    {name: 'Flying', offset: 0, type: enumType},
    {name: 'Grounding', offset: 1, type: enumType},
    {name: 'Climbing', offset: 2, type: enumType}
  ]);
})();
var entities = entities || {};
entities.game = entities.game || {};
entities.game.GameScene = entities.game.GameScene || {};
entities.game.GameScene.Component = function() {
};
entities.game.GameScene.Component.prototype = Object.create(null);
entities.game.GameScene.Component.prototype.constructor = entities.game.GameScene.Component;
Object.defineProperties(entities.game.GameScene.Component.prototype, {
});
entities.game.GameScene.Component._size = 1;
entities.game.GameScene.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.GameScene.Component.prototype);
  return v;
};
entities.game.GameScene.Component._toPtr = function(ptr, v) {
};
entities.game.GameScene.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.GameScene.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.GameScene.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.GameScene.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.GameScene.Component.StorageView.prototype = Object.create(null);
entities.game.GameScene.Component.StorageView.prototype.constructor = entities.game.GameScene.Component.StorageView;
entities.game.GameScene.Component._view = entities.game.GameScene.Component.StorageView;
entities.game.GameScene.Component.StorageView._isSharedComp = entities.game.GameScene.Component._isSharedComp = false;
entities.game.GameScene.Component.StorageView._fromPtr = entities.game.GameScene.Component._fromPtr;
entities.game.GameScene.Component.StorageView._toPtr = entities.game.GameScene.Component._toPtr;
entities.game.GameScene.Component.StorageView._tempHeapPtr = entities.game.GameScene.Component._tempHeapPtr;
entities.game.GameScene.Component.StorageView._size = entities.game.GameScene.Component._size;
entities.game.GameScene.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.GameScene.Component.StorageView.prototype, {
});
entities.game.GameScene.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.GameScene.Component is a POD type, so a JavaScript side copy constructor entities.game.GameScene.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.GameScene.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.GameScene.Component', 1, []);
})();
Object.defineProperties(entities.game.GameScene.Component, { cid: { configurable: true, get: function() { delete entities.game.GameScene.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.GameScene.Component.cid = Module._ut_component_register_cid_with_type(entities.game.GameScene.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.GameScene.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.GameScene.Component.cid; } } });
entities.game.Level0 = entities.game.Level0 || {};
entities.game.Level0.Component = function() {
};
entities.game.Level0.Component.prototype = Object.create(null);
entities.game.Level0.Component.prototype.constructor = entities.game.Level0.Component;
Object.defineProperties(entities.game.Level0.Component.prototype, {
});
entities.game.Level0.Component._size = 1;
entities.game.Level0.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Level0.Component.prototype);
  return v;
};
entities.game.Level0.Component._toPtr = function(ptr, v) {
};
entities.game.Level0.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Level0.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Level0.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Level0.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Level0.Component.StorageView.prototype = Object.create(null);
entities.game.Level0.Component.StorageView.prototype.constructor = entities.game.Level0.Component.StorageView;
entities.game.Level0.Component._view = entities.game.Level0.Component.StorageView;
entities.game.Level0.Component.StorageView._isSharedComp = entities.game.Level0.Component._isSharedComp = false;
entities.game.Level0.Component.StorageView._fromPtr = entities.game.Level0.Component._fromPtr;
entities.game.Level0.Component.StorageView._toPtr = entities.game.Level0.Component._toPtr;
entities.game.Level0.Component.StorageView._tempHeapPtr = entities.game.Level0.Component._tempHeapPtr;
entities.game.Level0.Component.StorageView._size = entities.game.Level0.Component._size;
entities.game.Level0.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Level0.Component.StorageView.prototype, {
});
entities.game.Level0.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Level0.Component is a POD type, so a JavaScript side copy constructor entities.game.Level0.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Level0.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Level0.Component', 1, []);
})();
Object.defineProperties(entities.game.Level0.Component, { cid: { configurable: true, get: function() { delete entities.game.Level0.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Level0.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Level0.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Level0.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Level0.Component.cid; } } });
entities.game.PlantEntities = entities.game.PlantEntities || {};
entities.game.PlantEntities.Component = function() {
};
entities.game.PlantEntities.Component.prototype = Object.create(null);
entities.game.PlantEntities.Component.prototype.constructor = entities.game.PlantEntities.Component;
Object.defineProperties(entities.game.PlantEntities.Component.prototype, {
});
entities.game.PlantEntities.Component._size = 1;
entities.game.PlantEntities.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.PlantEntities.Component.prototype);
  return v;
};
entities.game.PlantEntities.Component._toPtr = function(ptr, v) {
};
entities.game.PlantEntities.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.PlantEntities.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.PlantEntities.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.PlantEntities.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.PlantEntities.Component.StorageView.prototype = Object.create(null);
entities.game.PlantEntities.Component.StorageView.prototype.constructor = entities.game.PlantEntities.Component.StorageView;
entities.game.PlantEntities.Component._view = entities.game.PlantEntities.Component.StorageView;
entities.game.PlantEntities.Component.StorageView._isSharedComp = entities.game.PlantEntities.Component._isSharedComp = false;
entities.game.PlantEntities.Component.StorageView._fromPtr = entities.game.PlantEntities.Component._fromPtr;
entities.game.PlantEntities.Component.StorageView._toPtr = entities.game.PlantEntities.Component._toPtr;
entities.game.PlantEntities.Component.StorageView._tempHeapPtr = entities.game.PlantEntities.Component._tempHeapPtr;
entities.game.PlantEntities.Component.StorageView._size = entities.game.PlantEntities.Component._size;
entities.game.PlantEntities.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.PlantEntities.Component.StorageView.prototype, {
});
entities.game.PlantEntities.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.PlantEntities.Component is a POD type, so a JavaScript side copy constructor entities.game.PlantEntities.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.PlantEntities.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.PlantEntities.Component', 1, []);
})();
Object.defineProperties(entities.game.PlantEntities.Component, { cid: { configurable: true, get: function() { delete entities.game.PlantEntities.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.PlantEntities.Component.cid = Module._ut_component_register_cid_with_type(entities.game.PlantEntities.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.PlantEntities.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.PlantEntities.Component.cid; } } });
entities.game.PrinceEntities = entities.game.PrinceEntities || {};
entities.game.PrinceEntities.Component = function() {
};
entities.game.PrinceEntities.Component.prototype = Object.create(null);
entities.game.PrinceEntities.Component.prototype.constructor = entities.game.PrinceEntities.Component;
Object.defineProperties(entities.game.PrinceEntities.Component.prototype, {
});
entities.game.PrinceEntities.Component._size = 1;
entities.game.PrinceEntities.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.PrinceEntities.Component.prototype);
  return v;
};
entities.game.PrinceEntities.Component._toPtr = function(ptr, v) {
};
entities.game.PrinceEntities.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.PrinceEntities.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.PrinceEntities.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.PrinceEntities.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.PrinceEntities.Component.StorageView.prototype = Object.create(null);
entities.game.PrinceEntities.Component.StorageView.prototype.constructor = entities.game.PrinceEntities.Component.StorageView;
entities.game.PrinceEntities.Component._view = entities.game.PrinceEntities.Component.StorageView;
entities.game.PrinceEntities.Component.StorageView._isSharedComp = entities.game.PrinceEntities.Component._isSharedComp = false;
entities.game.PrinceEntities.Component.StorageView._fromPtr = entities.game.PrinceEntities.Component._fromPtr;
entities.game.PrinceEntities.Component.StorageView._toPtr = entities.game.PrinceEntities.Component._toPtr;
entities.game.PrinceEntities.Component.StorageView._tempHeapPtr = entities.game.PrinceEntities.Component._tempHeapPtr;
entities.game.PrinceEntities.Component.StorageView._size = entities.game.PrinceEntities.Component._size;
entities.game.PrinceEntities.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.PrinceEntities.Component.StorageView.prototype, {
});
entities.game.PrinceEntities.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.PrinceEntities.Component is a POD type, so a JavaScript side copy constructor entities.game.PrinceEntities.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.PrinceEntities.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.PrinceEntities.Component', 1, []);
})();
Object.defineProperties(entities.game.PrinceEntities.Component, { cid: { configurable: true, get: function() { delete entities.game.PrinceEntities.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.PrinceEntities.Component.cid = Module._ut_component_register_cid_with_type(entities.game.PrinceEntities.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.PrinceEntities.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.PrinceEntities.Component.cid; } } });
entities.game.ShootEntities = entities.game.ShootEntities || {};
entities.game.ShootEntities.Component = function() {
};
entities.game.ShootEntities.Component.prototype = Object.create(null);
entities.game.ShootEntities.Component.prototype.constructor = entities.game.ShootEntities.Component;
Object.defineProperties(entities.game.ShootEntities.Component.prototype, {
});
entities.game.ShootEntities.Component._size = 1;
entities.game.ShootEntities.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.ShootEntities.Component.prototype);
  return v;
};
entities.game.ShootEntities.Component._toPtr = function(ptr, v) {
};
entities.game.ShootEntities.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.ShootEntities.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.ShootEntities.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.ShootEntities.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.ShootEntities.Component.StorageView.prototype = Object.create(null);
entities.game.ShootEntities.Component.StorageView.prototype.constructor = entities.game.ShootEntities.Component.StorageView;
entities.game.ShootEntities.Component._view = entities.game.ShootEntities.Component.StorageView;
entities.game.ShootEntities.Component.StorageView._isSharedComp = entities.game.ShootEntities.Component._isSharedComp = false;
entities.game.ShootEntities.Component.StorageView._fromPtr = entities.game.ShootEntities.Component._fromPtr;
entities.game.ShootEntities.Component.StorageView._toPtr = entities.game.ShootEntities.Component._toPtr;
entities.game.ShootEntities.Component.StorageView._tempHeapPtr = entities.game.ShootEntities.Component._tempHeapPtr;
entities.game.ShootEntities.Component.StorageView._size = entities.game.ShootEntities.Component._size;
entities.game.ShootEntities.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.ShootEntities.Component.StorageView.prototype, {
});
entities.game.ShootEntities.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.ShootEntities.Component is a POD type, so a JavaScript side copy constructor entities.game.ShootEntities.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.ShootEntities.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.ShootEntities.Component', 1, []);
})();
Object.defineProperties(entities.game.ShootEntities.Component, { cid: { configurable: true, get: function() { delete entities.game.ShootEntities.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.ShootEntities.Component.cid = Module._ut_component_register_cid_with_type(entities.game.ShootEntities.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.ShootEntities.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.ShootEntities.Component.cid; } } });
entities.game.Ground = entities.game.Ground || {};
entities.game.Ground.Component = function() {
};
entities.game.Ground.Component.prototype = Object.create(null);
entities.game.Ground.Component.prototype.constructor = entities.game.Ground.Component;
Object.defineProperties(entities.game.Ground.Component.prototype, {
});
entities.game.Ground.Component._size = 1;
entities.game.Ground.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Ground.Component.prototype);
  return v;
};
entities.game.Ground.Component._toPtr = function(ptr, v) {
};
entities.game.Ground.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Ground.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Ground.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Ground.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Ground.Component.StorageView.prototype = Object.create(null);
entities.game.Ground.Component.StorageView.prototype.constructor = entities.game.Ground.Component.StorageView;
entities.game.Ground.Component._view = entities.game.Ground.Component.StorageView;
entities.game.Ground.Component.StorageView._isSharedComp = entities.game.Ground.Component._isSharedComp = false;
entities.game.Ground.Component.StorageView._fromPtr = entities.game.Ground.Component._fromPtr;
entities.game.Ground.Component.StorageView._toPtr = entities.game.Ground.Component._toPtr;
entities.game.Ground.Component.StorageView._tempHeapPtr = entities.game.Ground.Component._tempHeapPtr;
entities.game.Ground.Component.StorageView._size = entities.game.Ground.Component._size;
entities.game.Ground.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Ground.Component.StorageView.prototype, {
});
entities.game.Ground.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Ground.Component is a POD type, so a JavaScript side copy constructor entities.game.Ground.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Ground.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Ground.Component', 1, []);
})();
Object.defineProperties(entities.game.Ground.Component, { cid: { configurable: true, get: function() { delete entities.game.Ground.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Ground.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Ground.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Ground.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Ground.Component.cid; } } });
game.ClimbingHitBox = function() {
};
game.ClimbingHitBox.prototype = Object.create(null);
game.ClimbingHitBox.prototype.constructor = game.ClimbingHitBox;
Object.defineProperties(game.ClimbingHitBox.prototype, {
});
game.ClimbingHitBox._size = 1;
game.ClimbingHitBox._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ClimbingHitBox.prototype);
  return v;
};
game.ClimbingHitBox._toPtr = function(ptr, v) {
};
game.ClimbingHitBox._toTempHeapPtr = function(ptr, v) {
};
game.ClimbingHitBox._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.ClimbingHitBox._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ClimbingHitBox.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.ClimbingHitBox.StorageView.prototype = Object.create(null);
game.ClimbingHitBox.StorageView.prototype.constructor = game.ClimbingHitBox.StorageView;
game.ClimbingHitBox._view = game.ClimbingHitBox.StorageView;
game.ClimbingHitBox.StorageView._isSharedComp = game.ClimbingHitBox._isSharedComp = false;
game.ClimbingHitBox.StorageView._fromPtr = game.ClimbingHitBox._fromPtr;
game.ClimbingHitBox.StorageView._toPtr = game.ClimbingHitBox._toPtr;
game.ClimbingHitBox.StorageView._tempHeapPtr = game.ClimbingHitBox._tempHeapPtr;
game.ClimbingHitBox.StorageView._size = game.ClimbingHitBox._size;
game.ClimbingHitBox.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.ClimbingHitBox.StorageView.prototype, {
});
game.ClimbingHitBox._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.ClimbingHitBox is a POD type, so a JavaScript side copy constructor game.ClimbingHitBox._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.ClimbingHitBox._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.ClimbingHitBox', 1, []);
})();
Object.defineProperties(game.ClimbingHitBox, { cid: { configurable: true, get: function() { delete game.ClimbingHitBox.cid; var offsetsPtr = 0, offsetsCount = 0; return game.ClimbingHitBox.cid = Module._ut_component_register_cid_with_type(game.ClimbingHitBox._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.ClimbingHitBox.StorageView, { cid: { configurable: true, get: function() { return game.ClimbingHitBox.cid; } } });
game.GameState = function(arg0) {
  this._state = (arg0|0);
};
game.GameState.prototype = Object.create(null);
game.GameState.prototype.constructor = game.GameState;
Object.defineProperties(game.GameState.prototype, {
  state: {
    get: function() { return this._state; },
    set: function(v) { this._state = (v|0); },
  },
});
game.GameState._size = 4;
game.GameState._fromPtr = function(ptr, v) {
  v = v || Object.create(game.GameState.prototype);
  v._state = HEAP32[(ptr+0)>>2];
  return v;
};
game.GameState._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.state;
};
game.GameState._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.state;
};
game.GameState._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.GameState._toTempHeapPtr(ptr, v);
  return ptr;
};
game.GameState.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.GameState.StorageView.prototype = Object.create(null);
game.GameState.StorageView.prototype.constructor = game.GameState.StorageView;
game.GameState._view = game.GameState.StorageView;
game.GameState.StorageView._isSharedComp = game.GameState._isSharedComp = false;
game.GameState.StorageView._fromPtr = game.GameState._fromPtr;
game.GameState.StorageView._toPtr = game.GameState._toPtr;
game.GameState.StorageView._tempHeapPtr = game.GameState._tempHeapPtr;
game.GameState.StorageView._size = game.GameState._size;
game.GameState.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.GameState.StorageView.prototype, {
  state: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
game.GameState._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.GameState is a POD type, so a JavaScript side copy constructor game.GameState._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.GameState._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.GameState', 4, [
    {name: 'state', offset: 0, type: ut.meta.getType('game.GameStateEnum')}
  ]);
})();
Object.defineProperties(game.GameState, { cid: { configurable: true, get: function() { delete game.GameState.cid; var offsetsPtr = 0, offsetsCount = 0; return game.GameState.cid = Module._ut_component_register_cid_with_type(game.GameState._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.GameState.StorageView, { cid: { configurable: true, get: function() { return game.GameState.cid; } } });
game.GameState.state = { $ofs:0, $t:"game.GameStateEnum", $c:game.GameState };
game.GameStateDisplay = function(arg0) {
  this._gameStateStr = (arg0 === undefined ? '' : arg0);
};
game.GameStateDisplay.prototype = Object.create(null);
game.GameStateDisplay.prototype.constructor = game.GameStateDisplay;
Object.defineProperties(game.GameStateDisplay.prototype, {
  gameStateStr: {
    get: function() { return this._gameStateStr; },
    set: function(v) { this._gameStateStr = (v === undefined ? '' : v); },
  },
});
game.GameStateDisplay._size = 8;
game.GameStateDisplay._fromPtr = function(ptr, v) {
  v = v || Object.create(game.GameStateDisplay.prototype);
  v._gameStateStr = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  return v;
};
game.GameStateDisplay._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.gameStateStr);
};
game.GameStateDisplay._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.gameStateStr);
};
game.GameStateDisplay._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.GameStateDisplay._toTempHeapPtr(ptr, v);
  return ptr;
};
game.GameStateDisplay.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.GameStateDisplay.StorageView.prototype = Object.create(null);
game.GameStateDisplay.StorageView.prototype.constructor = game.GameStateDisplay.StorageView;
game.GameStateDisplay._view = game.GameStateDisplay.StorageView;
game.GameStateDisplay.StorageView._isSharedComp = game.GameStateDisplay._isSharedComp = false;
game.GameStateDisplay.StorageView._fromPtr = game.GameStateDisplay._fromPtr;
game.GameStateDisplay.StorageView._toPtr = game.GameStateDisplay._toPtr;
game.GameStateDisplay.StorageView._tempHeapPtr = game.GameStateDisplay._tempHeapPtr;
game.GameStateDisplay.StorageView._size = game.GameStateDisplay._size;
game.GameStateDisplay.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.GameStateDisplay.StorageView.prototype, {
  gameStateStr: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
});
game.GameStateDisplay._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
game.GameStateDisplay._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
};
game.GameStateDisplay._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.GameStateDisplay', 8, [
    {name: 'gameStateStr', offset: 0, type: ut.meta.getType('string')}
  ]);
})();
Object.defineProperties(game.GameStateDisplay, { cid: { configurable: true, get: function() { delete game.GameStateDisplay.cid; var offsetsPtr = 0, offsetsCount = 0; return game.GameStateDisplay.cid = Module._ut_component_register_cid_with_type(game.GameStateDisplay._typeDesc, 4, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(game.GameStateDisplay._dtorFn), ut.CopyFn._cb.token_for(game.GameStateDisplay._copyFn)); } } });
Object.defineProperties(game.GameStateDisplay.StorageView, { cid: { configurable: true, get: function() { return game.GameStateDisplay.cid; } } });
game.GameStateDisplay.gameStateStr = { $ofs:0, $t:"System.String", $c:game.GameStateDisplay };
game.Goal = function(arg0) {
  this._isReached = (arg0 ? true : false);
};
game.Goal.prototype = Object.create(null);
game.Goal.prototype.constructor = game.Goal;
Object.defineProperties(game.Goal.prototype, {
  isReached: {
    get: function() { return this._isReached; },
    set: function(v) { this._isReached = (v ? true : false); },
  },
});
game.Goal._size = 1;
game.Goal._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Goal.prototype);
  v._isReached = (HEAP8[ptr+0]?true:false);
  return v;
};
game.Goal._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.isReached)?1:0;
};
game.Goal._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.isReached)?1:0;
};
game.Goal._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.Goal._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Goal.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Goal.StorageView.prototype = Object.create(null);
game.Goal.StorageView.prototype.constructor = game.Goal.StorageView;
game.Goal._view = game.Goal.StorageView;
game.Goal.StorageView._isSharedComp = game.Goal._isSharedComp = false;
game.Goal.StorageView._fromPtr = game.Goal._fromPtr;
game.Goal.StorageView._toPtr = game.Goal._toPtr;
game.Goal.StorageView._tempHeapPtr = game.Goal._tempHeapPtr;
game.Goal.StorageView._size = game.Goal._size;
game.Goal.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.Goal.StorageView.prototype, {
  isReached: {
    get: function() { return (HEAP8[this._ptr+0]?true:false); },
    set: function(v) { HEAP8[this._ptr+0] = (v)?1:0; },
  },
});
game.Goal._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Goal is a POD type, so a JavaScript side copy constructor game.Goal._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Goal._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Goal', 1, [
    {name: 'isReached', offset: 0, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.Goal, { cid: { configurable: true, get: function() { delete game.Goal.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Goal.cid = Module._ut_component_register_cid_with_type(game.Goal._typeDesc, 1, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Goal.StorageView, { cid: { configurable: true, get: function() { return game.Goal.cid; } } });
game.Goal.isReached = { $ofs:0, $t:"bool", $c:game.Goal };
game.Gravity = function(arg0) {
  this._gravity = new ut.Math.Vector2(); if ((arg0) !== undefined) { this._gravity.copy(arg0); };
};
game.Gravity.prototype = Object.create(null);
game.Gravity.prototype.constructor = game.Gravity;
Object.defineProperties(game.Gravity.prototype, {
  gravity: {
    get: function() { return this._gravity; },
    set: function(v) { this._gravity.copy(v); },
  },
});
game.Gravity._size = 8;
game.Gravity._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Gravity.prototype);
  v._gravity = ut._utils.vec2FromHeap(null, ptr+0);
  return v;
};
game.Gravity._toPtr = function(ptr, v) {
  ut._utils.vec2ToHeap(v.gravity, ptr+0);
};
game.Gravity._toTempHeapPtr = function(ptr, v) {
  ut._utils.vec2ToHeap(v.gravity, ptr+0);
};
game.Gravity._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.Gravity._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Gravity.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Gravity.StorageView.prototype = Object.create(null);
game.Gravity.StorageView.prototype.constructor = game.Gravity.StorageView;
game.Gravity._view = game.Gravity.StorageView;
game.Gravity.StorageView._isSharedComp = game.Gravity._isSharedComp = false;
game.Gravity.StorageView._fromPtr = game.Gravity._fromPtr;
game.Gravity.StorageView._toPtr = game.Gravity._toPtr;
game.Gravity.StorageView._tempHeapPtr = game.Gravity._tempHeapPtr;
game.Gravity.StorageView._size = game.Gravity._size;
game.Gravity.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.Gravity.StorageView.prototype, {
  gravity: {
    get: function() { return ut._utils.vec2FromHeap(null, this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec2ToHeap(v, this._ptr+0); },
  },
});
game.Gravity._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Gravity is a POD type, so a JavaScript side copy constructor game.Gravity._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Gravity._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Gravity', 8, [
    {name: 'gravity', offset: 0, type: ut.meta.getType('ut.Math.Vector2')}
  ]);
})();
Object.defineProperties(game.Gravity, { cid: { configurable: true, get: function() { delete game.Gravity.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Gravity.cid = Module._ut_component_register_cid_with_type(game.Gravity._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Gravity.StorageView, { cid: { configurable: true, get: function() { return game.Gravity.cid; } } });
game.Gravity.gravity = { $ofs:0, $t:"ut.Math.Vector2", $c:game.Gravity };
game.Gravity.gravity.y = { $ofs:4, $t:"float", $c:game.Gravity };
game.Gravity.gravity.x = { $ofs:0, $t:"float", $c:game.Gravity };
game.GroundingHitBox = function() {
};
game.GroundingHitBox.prototype = Object.create(null);
game.GroundingHitBox.prototype.constructor = game.GroundingHitBox;
Object.defineProperties(game.GroundingHitBox.prototype, {
});
game.GroundingHitBox._size = 1;
game.GroundingHitBox._fromPtr = function(ptr, v) {
  v = v || Object.create(game.GroundingHitBox.prototype);
  return v;
};
game.GroundingHitBox._toPtr = function(ptr, v) {
};
game.GroundingHitBox._toTempHeapPtr = function(ptr, v) {
};
game.GroundingHitBox._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.GroundingHitBox._toTempHeapPtr(ptr, v);
  return ptr;
};
game.GroundingHitBox.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.GroundingHitBox.StorageView.prototype = Object.create(null);
game.GroundingHitBox.StorageView.prototype.constructor = game.GroundingHitBox.StorageView;
game.GroundingHitBox._view = game.GroundingHitBox.StorageView;
game.GroundingHitBox.StorageView._isSharedComp = game.GroundingHitBox._isSharedComp = false;
game.GroundingHitBox.StorageView._fromPtr = game.GroundingHitBox._fromPtr;
game.GroundingHitBox.StorageView._toPtr = game.GroundingHitBox._toPtr;
game.GroundingHitBox.StorageView._tempHeapPtr = game.GroundingHitBox._tempHeapPtr;
game.GroundingHitBox.StorageView._size = game.GroundingHitBox._size;
game.GroundingHitBox.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.GroundingHitBox.StorageView.prototype, {
});
game.GroundingHitBox._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.GroundingHitBox is a POD type, so a JavaScript side copy constructor game.GroundingHitBox._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.GroundingHitBox._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.GroundingHitBox', 1, []);
})();
Object.defineProperties(game.GroundingHitBox, { cid: { configurable: true, get: function() { delete game.GroundingHitBox.cid; var offsetsPtr = 0, offsetsCount = 0; return game.GroundingHitBox.cid = Module._ut_component_register_cid_with_type(game.GroundingHitBox._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.GroundingHitBox.StorageView, { cid: { configurable: true, get: function() { return game.GroundingHitBox.cid; } } });
game.Prince = function(arg0, arg1) {
  this._isFlip = (arg0 ? true : false);
  this._state = (arg1|0);
};
game.Prince.prototype = Object.create(null);
game.Prince.prototype.constructor = game.Prince;
Object.defineProperties(game.Prince.prototype, {
  isFlip: {
    get: function() { return this._isFlip; },
    set: function(v) { this._isFlip = (v ? true : false); },
  },
  state: {
    get: function() { return this._state; },
    set: function(v) { this._state = (v|0); },
  },
});
game.Prince._size = 8;
game.Prince._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Prince.prototype);
  v._isFlip = (HEAP8[ptr+0]?true:false);
  v._state = HEAP32[(ptr+4)>>2];
  return v;
};
game.Prince._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.isFlip)?1:0;
  HEAP32[(ptr+4)>>2] = v.state;
};
game.Prince._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.isFlip)?1:0;
  HEAP32[(ptr+4)>>2] = v.state;
};
game.Prince._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.Prince._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Prince.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Prince.StorageView.prototype = Object.create(null);
game.Prince.StorageView.prototype.constructor = game.Prince.StorageView;
game.Prince._view = game.Prince.StorageView;
game.Prince.StorageView._isSharedComp = game.Prince._isSharedComp = false;
game.Prince.StorageView._fromPtr = game.Prince._fromPtr;
game.Prince.StorageView._toPtr = game.Prince._toPtr;
game.Prince.StorageView._tempHeapPtr = game.Prince._tempHeapPtr;
game.Prince.StorageView._size = game.Prince._size;
game.Prince.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.Prince.StorageView.prototype, {
  isFlip: {
    get: function() { return (HEAP8[this._ptr+0]?true:false); },
    set: function(v) { HEAP8[this._ptr+0] = (v)?1:0; },
  },
  state: {
    get: function() { return HEAP32[(this._ptr+4)>>2]; },
    set: function(v) { HEAP32[(this._ptr+4)>>2] = v; },
  },
});
game.Prince._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Prince is a POD type, so a JavaScript side copy constructor game.Prince._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Prince._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Prince', 8, [
    {name: 'isFlip', offset: 0, type: ut.meta.getType('bool')},
    {name: 'state', offset: 4, type: ut.meta.getType('game.PrinceMoveState')}
  ]);
})();
Object.defineProperties(game.Prince, { cid: { configurable: true, get: function() { delete game.Prince.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Prince.cid = Module._ut_component_register_cid_with_type(game.Prince._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Prince.StorageView, { cid: { configurable: true, get: function() { return game.Prince.cid; } } });
game.Prince.isFlip = { $ofs:0, $t:"bool", $c:game.Prince };
game.Prince.state = { $ofs:4, $t:"game.PrinceMoveState", $c:game.Prince };
game.PrinceSpawner = function(arg0, arg1, arg2) {
  this._interval = (+(arg0===undefined ? 0 : arg0));
  this._princes = (arg1|0);
  this._time = (+(arg2===undefined ? 0 : arg2));
};
game.PrinceSpawner.prototype = Object.create(null);
game.PrinceSpawner.prototype.constructor = game.PrinceSpawner;
Object.defineProperties(game.PrinceSpawner.prototype, {
  interval: {
    get: function() { return this._interval; },
    set: function(v) { this._interval = (+(v===undefined ? 0 : v)); },
  },
  princes: {
    get: function() { return this._princes; },
    set: function(v) { this._princes = (v|0); },
  },
  time: {
    get: function() { return this._time; },
    set: function(v) { this._time = (+(v===undefined ? 0 : v)); },
  },
});
game.PrinceSpawner._size = 12;
game.PrinceSpawner._fromPtr = function(ptr, v) {
  v = v || Object.create(game.PrinceSpawner.prototype);
  v._interval = HEAPF32[(ptr+0)>>2];
  v._princes = HEAP16[(ptr+4)>>1];
  v._time = HEAPF32[(ptr+8)>>2];
  return v;
};
game.PrinceSpawner._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.interval;
  HEAP16[(ptr+4)>>1] = v.princes;
  HEAPF32[(ptr+8)>>2] = v.time;
};
game.PrinceSpawner._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.interval;
  HEAP16[(ptr+4)>>1] = v.princes;
  HEAPF32[(ptr+8)>>2] = v.time;
};
game.PrinceSpawner._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(12);
  if (v) game.PrinceSpawner._toTempHeapPtr(ptr, v);
  return ptr;
};
game.PrinceSpawner.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.PrinceSpawner.StorageView.prototype = Object.create(null);
game.PrinceSpawner.StorageView.prototype.constructor = game.PrinceSpawner.StorageView;
game.PrinceSpawner._view = game.PrinceSpawner.StorageView;
game.PrinceSpawner.StorageView._isSharedComp = game.PrinceSpawner._isSharedComp = false;
game.PrinceSpawner.StorageView._fromPtr = game.PrinceSpawner._fromPtr;
game.PrinceSpawner.StorageView._toPtr = game.PrinceSpawner._toPtr;
game.PrinceSpawner.StorageView._tempHeapPtr = game.PrinceSpawner._tempHeapPtr;
game.PrinceSpawner.StorageView._size = game.PrinceSpawner._size;
game.PrinceSpawner.StorageView.prototype.$advance = function() {
  this._ptr += 12;
};
Object.defineProperties(game.PrinceSpawner.StorageView.prototype, {
  interval: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  princes: {
    get: function() { return HEAP16[(this._ptr+4)>>1]; },
    set: function(v) { HEAP16[(this._ptr+4)>>1] = v; },
  },
  time: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
});
game.PrinceSpawner._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.PrinceSpawner is a POD type, so a JavaScript side copy constructor game.PrinceSpawner._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.PrinceSpawner._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.PrinceSpawner', 12, [
    {name: 'interval', offset: 0, type: ut.meta.getType('float')},
    {name: 'princes', offset: 4, type: ut.meta.getType('int16')},
    {name: 'time', offset: 8, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.PrinceSpawner, { cid: { configurable: true, get: function() { delete game.PrinceSpawner.cid; var offsetsPtr = 0, offsetsCount = 0; return game.PrinceSpawner.cid = Module._ut_component_register_cid_with_type(game.PrinceSpawner._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.PrinceSpawner.StorageView, { cid: { configurable: true, get: function() { return game.PrinceSpawner.cid; } } });
game.PrinceSpawner.interval = { $ofs:0, $t:"float", $c:game.PrinceSpawner };
game.PrinceSpawner.princes = { $ofs:4, $t:"int16_t", $c:game.PrinceSpawner };
game.PrinceSpawner.time = { $ofs:8, $t:"float", $c:game.PrinceSpawner };
game.Shoot = function() {
};
game.Shoot.prototype = Object.create(null);
game.Shoot.prototype.constructor = game.Shoot;
Object.defineProperties(game.Shoot.prototype, {
});
game.Shoot._size = 1;
game.Shoot._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Shoot.prototype);
  return v;
};
game.Shoot._toPtr = function(ptr, v) {
};
game.Shoot._toTempHeapPtr = function(ptr, v) {
};
game.Shoot._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.Shoot._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Shoot.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Shoot.StorageView.prototype = Object.create(null);
game.Shoot.StorageView.prototype.constructor = game.Shoot.StorageView;
game.Shoot._view = game.Shoot.StorageView;
game.Shoot.StorageView._isSharedComp = game.Shoot._isSharedComp = false;
game.Shoot.StorageView._fromPtr = game.Shoot._fromPtr;
game.Shoot.StorageView._toPtr = game.Shoot._toPtr;
game.Shoot.StorageView._tempHeapPtr = game.Shoot._tempHeapPtr;
game.Shoot.StorageView._size = game.Shoot._size;
game.Shoot.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.Shoot.StorageView.prototype, {
});
game.Shoot._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Shoot is a POD type, so a JavaScript side copy constructor game.Shoot._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Shoot._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Shoot', 1, []);
})();
Object.defineProperties(game.Shoot, { cid: { configurable: true, get: function() { delete game.Shoot.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Shoot.cid = Module._ut_component_register_cid_with_type(game.Shoot._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Shoot.StorageView, { cid: { configurable: true, get: function() { return game.Shoot.cid; } } });
game.ShootNumberDisplay = function() {
};
game.ShootNumberDisplay.prototype = Object.create(null);
game.ShootNumberDisplay.prototype.constructor = game.ShootNumberDisplay;
Object.defineProperties(game.ShootNumberDisplay.prototype, {
});
game.ShootNumberDisplay._size = 1;
game.ShootNumberDisplay._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ShootNumberDisplay.prototype);
  return v;
};
game.ShootNumberDisplay._toPtr = function(ptr, v) {
};
game.ShootNumberDisplay._toTempHeapPtr = function(ptr, v) {
};
game.ShootNumberDisplay._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.ShootNumberDisplay._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ShootNumberDisplay.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.ShootNumberDisplay.StorageView.prototype = Object.create(null);
game.ShootNumberDisplay.StorageView.prototype.constructor = game.ShootNumberDisplay.StorageView;
game.ShootNumberDisplay._view = game.ShootNumberDisplay.StorageView;
game.ShootNumberDisplay.StorageView._isSharedComp = game.ShootNumberDisplay._isSharedComp = false;
game.ShootNumberDisplay.StorageView._fromPtr = game.ShootNumberDisplay._fromPtr;
game.ShootNumberDisplay.StorageView._toPtr = game.ShootNumberDisplay._toPtr;
game.ShootNumberDisplay.StorageView._tempHeapPtr = game.ShootNumberDisplay._tempHeapPtr;
game.ShootNumberDisplay.StorageView._size = game.ShootNumberDisplay._size;
game.ShootNumberDisplay.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.ShootNumberDisplay.StorageView.prototype, {
});
game.ShootNumberDisplay._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.ShootNumberDisplay is a POD type, so a JavaScript side copy constructor game.ShootNumberDisplay._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.ShootNumberDisplay._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.ShootNumberDisplay', 1, []);
})();
Object.defineProperties(game.ShootNumberDisplay, { cid: { configurable: true, get: function() { delete game.ShootNumberDisplay.cid; var offsetsPtr = 0, offsetsCount = 0; return game.ShootNumberDisplay.cid = Module._ut_component_register_cid_with_type(game.ShootNumberDisplay._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.ShootNumberDisplay.StorageView, { cid: { configurable: true, get: function() { return game.ShootNumberDisplay.cid; } } });
game.ShootPoint = function(arg0) {
  this._shoots = (arg0|0);
};
game.ShootPoint.prototype = Object.create(null);
game.ShootPoint.prototype.constructor = game.ShootPoint;
Object.defineProperties(game.ShootPoint.prototype, {
  shoots: {
    get: function() { return this._shoots; },
    set: function(v) { this._shoots = (v|0); },
  },
});
game.ShootPoint._size = 2;
game.ShootPoint._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ShootPoint.prototype);
  v._shoots = HEAP16[(ptr+0)>>1];
  return v;
};
game.ShootPoint._toPtr = function(ptr, v) {
  HEAP16[(ptr+0)>>1] = v.shoots;
};
game.ShootPoint._toTempHeapPtr = function(ptr, v) {
  HEAP16[(ptr+0)>>1] = v.shoots;
};
game.ShootPoint._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(2);
  if (v) game.ShootPoint._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ShootPoint.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.ShootPoint.StorageView.prototype = Object.create(null);
game.ShootPoint.StorageView.prototype.constructor = game.ShootPoint.StorageView;
game.ShootPoint._view = game.ShootPoint.StorageView;
game.ShootPoint.StorageView._isSharedComp = game.ShootPoint._isSharedComp = false;
game.ShootPoint.StorageView._fromPtr = game.ShootPoint._fromPtr;
game.ShootPoint.StorageView._toPtr = game.ShootPoint._toPtr;
game.ShootPoint.StorageView._tempHeapPtr = game.ShootPoint._tempHeapPtr;
game.ShootPoint.StorageView._size = game.ShootPoint._size;
game.ShootPoint.StorageView.prototype.$advance = function() {
  this._ptr += 2;
};
Object.defineProperties(game.ShootPoint.StorageView.prototype, {
  shoots: {
    get: function() { return HEAP16[(this._ptr+0)>>1]; },
    set: function(v) { HEAP16[(this._ptr+0)>>1] = v; },
  },
});
game.ShootPoint._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.ShootPoint is a POD type, so a JavaScript side copy constructor game.ShootPoint._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.ShootPoint._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.ShootPoint', 2, [
    {name: 'shoots', offset: 0, type: ut.meta.getType('int16')}
  ]);
})();
Object.defineProperties(game.ShootPoint, { cid: { configurable: true, get: function() { delete game.ShootPoint.cid; var offsetsPtr = 0, offsetsCount = 0; return game.ShootPoint.cid = Module._ut_component_register_cid_with_type(game.ShootPoint._typeDesc, 2, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.ShootPoint.StorageView, { cid: { configurable: true, get: function() { return game.ShootPoint.cid; } } });
game.ShootPoint.shoots = { $ofs:0, $t:"int16_t", $c:game.ShootPoint };
var ut = ut || {};
ut.Core2D = ut.Core2D || {};
ut.Core2D.layers = ut.Core2D.layers || {};
ut.Core2D.layers.Default = function() {
};
ut.Core2D.layers.Default.prototype = Object.create(null);
ut.Core2D.layers.Default.prototype.constructor = ut.Core2D.layers.Default;
Object.defineProperties(ut.Core2D.layers.Default.prototype, {
});
ut.Core2D.layers.Default._size = 1;
ut.Core2D.layers.Default._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Default.prototype);
  return v;
};
ut.Core2D.layers.Default._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Default._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Default._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Default._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Default.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Default.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Default.StorageView.prototype.constructor = ut.Core2D.layers.Default.StorageView;
ut.Core2D.layers.Default._view = ut.Core2D.layers.Default.StorageView;
ut.Core2D.layers.Default.StorageView._isSharedComp = ut.Core2D.layers.Default._isSharedComp = false;
ut.Core2D.layers.Default.StorageView._fromPtr = ut.Core2D.layers.Default._fromPtr;
ut.Core2D.layers.Default.StorageView._toPtr = ut.Core2D.layers.Default._toPtr;
ut.Core2D.layers.Default.StorageView._tempHeapPtr = ut.Core2D.layers.Default._tempHeapPtr;
ut.Core2D.layers.Default.StorageView._size = ut.Core2D.layers.Default._size;
ut.Core2D.layers.Default.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Default.StorageView.prototype, {
});
ut.Core2D.layers.Default._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Default is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Default._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.Default._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Default', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Default, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Default.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Default.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Default._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Default.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Default.cid; } } });
ut.Core2D.layers.TransparentFX = function() {
};
ut.Core2D.layers.TransparentFX.prototype = Object.create(null);
ut.Core2D.layers.TransparentFX.prototype.constructor = ut.Core2D.layers.TransparentFX;
Object.defineProperties(ut.Core2D.layers.TransparentFX.prototype, {
});
ut.Core2D.layers.TransparentFX._size = 1;
ut.Core2D.layers.TransparentFX._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.TransparentFX.prototype);
  return v;
};
ut.Core2D.layers.TransparentFX._toPtr = function(ptr, v) {
};
ut.Core2D.layers.TransparentFX._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.TransparentFX._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.TransparentFX._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.TransparentFX.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.TransparentFX.StorageView.prototype = Object.create(null);
ut.Core2D.layers.TransparentFX.StorageView.prototype.constructor = ut.Core2D.layers.TransparentFX.StorageView;
ut.Core2D.layers.TransparentFX._view = ut.Core2D.layers.TransparentFX.StorageView;
ut.Core2D.layers.TransparentFX.StorageView._isSharedComp = ut.Core2D.layers.TransparentFX._isSharedComp = false;
ut.Core2D.layers.TransparentFX.StorageView._fromPtr = ut.Core2D.layers.TransparentFX._fromPtr;
ut.Core2D.layers.TransparentFX.StorageView._toPtr = ut.Core2D.layers.TransparentFX._toPtr;
ut.Core2D.layers.TransparentFX.StorageView._tempHeapPtr = ut.Core2D.layers.TransparentFX._tempHeapPtr;
ut.Core2D.layers.TransparentFX.StorageView._size = ut.Core2D.layers.TransparentFX._size;
ut.Core2D.layers.TransparentFX.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.TransparentFX.StorageView.prototype, {
});
ut.Core2D.layers.TransparentFX._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.TransparentFX is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.TransparentFX._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.TransparentFX._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.TransparentFX', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.TransparentFX, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.TransparentFX.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.TransparentFX.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.TransparentFX._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.TransparentFX.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.TransparentFX.cid; } } });
ut.Core2D.layers.IgnoreRaycast = function() {
};
ut.Core2D.layers.IgnoreRaycast.prototype = Object.create(null);
ut.Core2D.layers.IgnoreRaycast.prototype.constructor = ut.Core2D.layers.IgnoreRaycast;
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.prototype, {
});
ut.Core2D.layers.IgnoreRaycast._size = 1;
ut.Core2D.layers.IgnoreRaycast._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.IgnoreRaycast.prototype);
  return v;
};
ut.Core2D.layers.IgnoreRaycast._toPtr = function(ptr, v) {
};
ut.Core2D.layers.IgnoreRaycast._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.IgnoreRaycast._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.IgnoreRaycast._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.IgnoreRaycast.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype = Object.create(null);
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype.constructor = ut.Core2D.layers.IgnoreRaycast.StorageView;
ut.Core2D.layers.IgnoreRaycast._view = ut.Core2D.layers.IgnoreRaycast.StorageView;
ut.Core2D.layers.IgnoreRaycast.StorageView._isSharedComp = ut.Core2D.layers.IgnoreRaycast._isSharedComp = false;
ut.Core2D.layers.IgnoreRaycast.StorageView._fromPtr = ut.Core2D.layers.IgnoreRaycast._fromPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._toPtr = ut.Core2D.layers.IgnoreRaycast._toPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._tempHeapPtr = ut.Core2D.layers.IgnoreRaycast._tempHeapPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._size = ut.Core2D.layers.IgnoreRaycast._size;
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.StorageView.prototype, {
});
ut.Core2D.layers.IgnoreRaycast._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.IgnoreRaycast is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.IgnoreRaycast._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.IgnoreRaycast._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.IgnoreRaycast', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.IgnoreRaycast.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.IgnoreRaycast.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.IgnoreRaycast._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.IgnoreRaycast.cid; } } });
ut.Core2D.layers.Water = function() {
};
ut.Core2D.layers.Water.prototype = Object.create(null);
ut.Core2D.layers.Water.prototype.constructor = ut.Core2D.layers.Water;
Object.defineProperties(ut.Core2D.layers.Water.prototype, {
});
ut.Core2D.layers.Water._size = 1;
ut.Core2D.layers.Water._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Water.prototype);
  return v;
};
ut.Core2D.layers.Water._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Water._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Water._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Water._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Water.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Water.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Water.StorageView.prototype.constructor = ut.Core2D.layers.Water.StorageView;
ut.Core2D.layers.Water._view = ut.Core2D.layers.Water.StorageView;
ut.Core2D.layers.Water.StorageView._isSharedComp = ut.Core2D.layers.Water._isSharedComp = false;
ut.Core2D.layers.Water.StorageView._fromPtr = ut.Core2D.layers.Water._fromPtr;
ut.Core2D.layers.Water.StorageView._toPtr = ut.Core2D.layers.Water._toPtr;
ut.Core2D.layers.Water.StorageView._tempHeapPtr = ut.Core2D.layers.Water._tempHeapPtr;
ut.Core2D.layers.Water.StorageView._size = ut.Core2D.layers.Water._size;
ut.Core2D.layers.Water.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Water.StorageView.prototype, {
});
ut.Core2D.layers.Water._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Water is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Water._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.Water._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Water', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Water, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Water.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Water.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Water._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Water.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Water.cid; } } });
ut.Core2D.layers.UI = function() {
};
ut.Core2D.layers.UI.prototype = Object.create(null);
ut.Core2D.layers.UI.prototype.constructor = ut.Core2D.layers.UI;
Object.defineProperties(ut.Core2D.layers.UI.prototype, {
});
ut.Core2D.layers.UI._size = 1;
ut.Core2D.layers.UI._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.UI.prototype);
  return v;
};
ut.Core2D.layers.UI._toPtr = function(ptr, v) {
};
ut.Core2D.layers.UI._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.UI._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.UI._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.UI.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.UI.StorageView.prototype = Object.create(null);
ut.Core2D.layers.UI.StorageView.prototype.constructor = ut.Core2D.layers.UI.StorageView;
ut.Core2D.layers.UI._view = ut.Core2D.layers.UI.StorageView;
ut.Core2D.layers.UI.StorageView._isSharedComp = ut.Core2D.layers.UI._isSharedComp = false;
ut.Core2D.layers.UI.StorageView._fromPtr = ut.Core2D.layers.UI._fromPtr;
ut.Core2D.layers.UI.StorageView._toPtr = ut.Core2D.layers.UI._toPtr;
ut.Core2D.layers.UI.StorageView._tempHeapPtr = ut.Core2D.layers.UI._tempHeapPtr;
ut.Core2D.layers.UI.StorageView._size = ut.Core2D.layers.UI._size;
ut.Core2D.layers.UI.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.UI.StorageView.prototype, {
});
ut.Core2D.layers.UI._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.UI is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.UI._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.UI._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.UI', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.UI, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.UI.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.UI.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.UI._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.UI.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.UI.cid; } } });
ut.Core2D.layers.PostProcessing = function() {
};
ut.Core2D.layers.PostProcessing.prototype = Object.create(null);
ut.Core2D.layers.PostProcessing.prototype.constructor = ut.Core2D.layers.PostProcessing;
Object.defineProperties(ut.Core2D.layers.PostProcessing.prototype, {
});
ut.Core2D.layers.PostProcessing._size = 1;
ut.Core2D.layers.PostProcessing._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.PostProcessing.prototype);
  return v;
};
ut.Core2D.layers.PostProcessing._toPtr = function(ptr, v) {
};
ut.Core2D.layers.PostProcessing._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.PostProcessing._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.PostProcessing._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.PostProcessing.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.PostProcessing.StorageView.prototype = Object.create(null);
ut.Core2D.layers.PostProcessing.StorageView.prototype.constructor = ut.Core2D.layers.PostProcessing.StorageView;
ut.Core2D.layers.PostProcessing._view = ut.Core2D.layers.PostProcessing.StorageView;
ut.Core2D.layers.PostProcessing.StorageView._isSharedComp = ut.Core2D.layers.PostProcessing._isSharedComp = false;
ut.Core2D.layers.PostProcessing.StorageView._fromPtr = ut.Core2D.layers.PostProcessing._fromPtr;
ut.Core2D.layers.PostProcessing.StorageView._toPtr = ut.Core2D.layers.PostProcessing._toPtr;
ut.Core2D.layers.PostProcessing.StorageView._tempHeapPtr = ut.Core2D.layers.PostProcessing._tempHeapPtr;
ut.Core2D.layers.PostProcessing.StorageView._size = ut.Core2D.layers.PostProcessing._size;
ut.Core2D.layers.PostProcessing.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.PostProcessing.StorageView.prototype, {
});
ut.Core2D.layers.PostProcessing._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.PostProcessing is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.PostProcessing._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.PostProcessing._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.PostProcessing', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.PostProcessing, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.PostProcessing.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.PostProcessing.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.PostProcessing._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.PostProcessing.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.PostProcessing.cid; } } });
ut.Core2D.layers.Cutscene = function() {
};
ut.Core2D.layers.Cutscene.prototype = Object.create(null);
ut.Core2D.layers.Cutscene.prototype.constructor = ut.Core2D.layers.Cutscene;
Object.defineProperties(ut.Core2D.layers.Cutscene.prototype, {
});
ut.Core2D.layers.Cutscene._size = 1;
ut.Core2D.layers.Cutscene._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Cutscene.prototype);
  return v;
};
ut.Core2D.layers.Cutscene._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Cutscene._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Cutscene._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Cutscene._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Cutscene.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Cutscene.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Cutscene.StorageView.prototype.constructor = ut.Core2D.layers.Cutscene.StorageView;
ut.Core2D.layers.Cutscene._view = ut.Core2D.layers.Cutscene.StorageView;
ut.Core2D.layers.Cutscene.StorageView._isSharedComp = ut.Core2D.layers.Cutscene._isSharedComp = false;
ut.Core2D.layers.Cutscene.StorageView._fromPtr = ut.Core2D.layers.Cutscene._fromPtr;
ut.Core2D.layers.Cutscene.StorageView._toPtr = ut.Core2D.layers.Cutscene._toPtr;
ut.Core2D.layers.Cutscene.StorageView._tempHeapPtr = ut.Core2D.layers.Cutscene._tempHeapPtr;
ut.Core2D.layers.Cutscene.StorageView._size = ut.Core2D.layers.Cutscene._size;
ut.Core2D.layers.Cutscene.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Cutscene.StorageView.prototype, {
});
ut.Core2D.layers.Cutscene._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Cutscene is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Cutscene._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.Cutscene._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Cutscene', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Cutscene, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Cutscene.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Cutscene.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Cutscene._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Cutscene.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Cutscene.cid; } } });
ut.EditorExtensions = ut.EditorExtensions || {};
ut.EditorExtensions.AssetReferenceAnimationClip = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceAnimationClip.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAnimationClip.prototype.constructor = ut.EditorExtensions.AssetReferenceAnimationClip;
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceAnimationClip._size = 24;
ut.EditorExtensions.AssetReferenceAnimationClip._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceAnimationClip.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceAnimationClip._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAnimationClip._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAnimationClip._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceAnimationClip._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceAnimationClip.StorageView;
ut.EditorExtensions.AssetReferenceAnimationClip._view = ut.EditorExtensions.AssetReferenceAnimationClip.StorageView;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceAnimationClip._isSharedComp = false;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceAnimationClip._fromPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._toPtr = ut.EditorExtensions.AssetReferenceAnimationClip._toPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceAnimationClip._tempHeapPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._size = ut.EditorExtensions.AssetReferenceAnimationClip._size;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceAnimationClip._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceAnimationClip._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceAnimationClip._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceAnimationClip', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAnimationClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAnimationClip.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceAnimationClip._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceAnimationClip.cid; } } });
ut.EditorExtensions.AssetReferenceAnimationClip.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAnimationClip.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAnimationClip.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAudioClip = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceAudioClip.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAudioClip.prototype.constructor = ut.EditorExtensions.AssetReferenceAudioClip;
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceAudioClip._size = 24;
ut.EditorExtensions.AssetReferenceAudioClip._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceAudioClip.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceAudioClip._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAudioClip._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAudioClip._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceAudioClip._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceAudioClip.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceAudioClip.StorageView;
ut.EditorExtensions.AssetReferenceAudioClip._view = ut.EditorExtensions.AssetReferenceAudioClip.StorageView;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceAudioClip._isSharedComp = false;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceAudioClip._fromPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._toPtr = ut.EditorExtensions.AssetReferenceAudioClip._toPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceAudioClip._tempHeapPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._size = ut.EditorExtensions.AssetReferenceAudioClip._size;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceAudioClip._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceAudioClip._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceAudioClip._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceAudioClip', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAudioClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAudioClip.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceAudioClip._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceAudioClip.cid; } } });
ut.EditorExtensions.AssetReferenceAudioClip.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceAudioClip.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceAudioClip.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceSprite = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceSprite.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSprite.prototype.constructor = ut.EditorExtensions.AssetReferenceSprite;
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceSprite._size = 24;
ut.EditorExtensions.AssetReferenceSprite._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceSprite.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceSprite._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSprite._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSprite._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceSprite._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceSprite.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceSprite.StorageView;
ut.EditorExtensions.AssetReferenceSprite._view = ut.EditorExtensions.AssetReferenceSprite.StorageView;
ut.EditorExtensions.AssetReferenceSprite.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceSprite._isSharedComp = false;
ut.EditorExtensions.AssetReferenceSprite.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceSprite._fromPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._toPtr = ut.EditorExtensions.AssetReferenceSprite._toPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceSprite._tempHeapPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._size = ut.EditorExtensions.AssetReferenceSprite._size;
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceSprite._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceSprite._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceSprite._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceSprite', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSprite.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSprite.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceSprite._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceSprite.cid; } } });
ut.EditorExtensions.AssetReferenceSprite.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSprite.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSprite.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSpriteAtlas = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype.constructor = ut.EditorExtensions.AssetReferenceSpriteAtlas;
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceSpriteAtlas._size = 24;
ut.EditorExtensions.AssetReferenceSpriteAtlas._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceSpriteAtlas._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView;
ut.EditorExtensions.AssetReferenceSpriteAtlas._view = ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceSpriteAtlas._isSharedComp = false;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._fromPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._toPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._toPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._tempHeapPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._size = ut.EditorExtensions.AssetReferenceSpriteAtlas._size;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceSpriteAtlas._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceSpriteAtlas', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSpriteAtlas.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSpriteAtlas.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceSpriteAtlas._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceSpriteAtlas.cid; } } });
ut.EditorExtensions.AssetReferenceSpriteAtlas.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceSpriteAtlas.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceSpriteAtlas.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceTMP_FontAsset = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype.constructor = ut.EditorExtensions.AssetReferenceTMP_FontAsset;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTMP_FontAsset._size = 24;
ut.EditorExtensions.AssetReferenceTMP_FontAsset._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTMP_FontAsset._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView;
ut.EditorExtensions.AssetReferenceTMP_FontAsset._view = ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTMP_FontAsset._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._fromPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._toPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._size = ut.EditorExtensions.AssetReferenceTMP_FontAsset._size;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTMP_FontAsset._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTMP_FontAsset', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTMP_FontAsset._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid; } } });
ut.EditorExtensions.AssetReferenceTMP_FontAsset.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.AssetReferenceTMP_FontAsset.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.AssetReferenceTMP_FontAsset.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.AssetReferenceTexture2D = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTexture2D.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTexture2D.prototype.constructor = ut.EditorExtensions.AssetReferenceTexture2D;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTexture2D._size = 24;
ut.EditorExtensions.AssetReferenceTexture2D._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTexture2D.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTexture2D._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTexture2D._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTexture2D._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTexture2D._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTexture2D.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTexture2D.StorageView;
ut.EditorExtensions.AssetReferenceTexture2D._view = ut.EditorExtensions.AssetReferenceTexture2D.StorageView;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTexture2D._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTexture2D._fromPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTexture2D._toPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTexture2D._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._size = ut.EditorExtensions.AssetReferenceTexture2D._size;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTexture2D._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTexture2D._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTexture2D._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTexture2D', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTexture2D.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTexture2D.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTexture2D._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTexture2D.cid; } } });
ut.EditorExtensions.AssetReferenceTexture2D.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTexture2D.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTexture2D.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTile = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTile.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTile.prototype.constructor = ut.EditorExtensions.AssetReferenceTile;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTile.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTile._size = 24;
ut.EditorExtensions.AssetReferenceTile._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTile.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTile._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTile._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTile._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTile._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTile.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTile.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTile.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTile.StorageView;
ut.EditorExtensions.AssetReferenceTile._view = ut.EditorExtensions.AssetReferenceTile.StorageView;
ut.EditorExtensions.AssetReferenceTile.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTile._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTile.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTile._fromPtr;
ut.EditorExtensions.AssetReferenceTile.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTile._toPtr;
ut.EditorExtensions.AssetReferenceTile.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTile._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTile.StorageView._size = ut.EditorExtensions.AssetReferenceTile._size;
ut.EditorExtensions.AssetReferenceTile.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTile.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTile._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTile._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTile._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTile', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTile, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTile.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTile.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTile._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTile._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTile._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTile.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTile.cid; } } });
ut.EditorExtensions.AssetReferenceTile.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTile };
ut.EditorExtensions.AssetReferenceTile.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTile };
ut.EditorExtensions.AssetReferenceTile.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTile };
ut.EditorExtensions.CameraCullingMask = function(arg0) {
  this._mask = (arg0|0);
};
ut.EditorExtensions.CameraCullingMask.prototype = Object.create(null);
ut.EditorExtensions.CameraCullingMask.prototype.constructor = ut.EditorExtensions.CameraCullingMask;
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.prototype, {
  mask: {
    get: function() { return this._mask; },
    set: function(v) { this._mask = (v|0); },
  },
});
ut.EditorExtensions.CameraCullingMask._size = 4;
ut.EditorExtensions.CameraCullingMask._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.CameraCullingMask.prototype);
  v._mask = HEAP32[(ptr+0)>>2];
  return v;
};
ut.EditorExtensions.CameraCullingMask._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.mask;
};
ut.EditorExtensions.CameraCullingMask._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.mask;
};
ut.EditorExtensions.CameraCullingMask._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) ut.EditorExtensions.CameraCullingMask._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.CameraCullingMask.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.CameraCullingMask.StorageView.prototype = Object.create(null);
ut.EditorExtensions.CameraCullingMask.StorageView.prototype.constructor = ut.EditorExtensions.CameraCullingMask.StorageView;
ut.EditorExtensions.CameraCullingMask._view = ut.EditorExtensions.CameraCullingMask.StorageView;
ut.EditorExtensions.CameraCullingMask.StorageView._isSharedComp = ut.EditorExtensions.CameraCullingMask._isSharedComp = false;
ut.EditorExtensions.CameraCullingMask.StorageView._fromPtr = ut.EditorExtensions.CameraCullingMask._fromPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._toPtr = ut.EditorExtensions.CameraCullingMask._toPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._tempHeapPtr = ut.EditorExtensions.CameraCullingMask._tempHeapPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._size = ut.EditorExtensions.CameraCullingMask._size;
ut.EditorExtensions.CameraCullingMask.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.StorageView.prototype, {
  mask: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
ut.EditorExtensions.CameraCullingMask._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.EditorExtensions.CameraCullingMask is a POD type, so a JavaScript side copy constructor ut.EditorExtensions.CameraCullingMask._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.EditorExtensions.CameraCullingMask._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.CameraCullingMask', 4, [
    {name: 'mask', offset: 0, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.CameraCullingMask, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.CameraCullingMask.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.CameraCullingMask.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.CameraCullingMask._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.CameraCullingMask.cid; } } });
ut.EditorExtensions.CameraCullingMask.mask = { $ofs:0, $t:"int32_t", $c:ut.EditorExtensions.CameraCullingMask };
ut.EditorExtensions.EntityLayer = function(arg0) {
  this._layer = (arg0|0);
};
ut.EditorExtensions.EntityLayer.prototype = Object.create(null);
ut.EditorExtensions.EntityLayer.prototype.constructor = ut.EditorExtensions.EntityLayer;
Object.defineProperties(ut.EditorExtensions.EntityLayer.prototype, {
  layer: {
    get: function() { return this._layer; },
    set: function(v) { this._layer = (v|0); },
  },
});
ut.EditorExtensions.EntityLayer._size = 4;
ut.EditorExtensions.EntityLayer._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.EntityLayer.prototype);
  v._layer = HEAP32[(ptr+0)>>2];
  return v;
};
ut.EditorExtensions.EntityLayer._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.layer;
};
ut.EditorExtensions.EntityLayer._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.layer;
};
ut.EditorExtensions.EntityLayer._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) ut.EditorExtensions.EntityLayer._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.EntityLayer.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.EntityLayer.StorageView.prototype = Object.create(null);
ut.EditorExtensions.EntityLayer.StorageView.prototype.constructor = ut.EditorExtensions.EntityLayer.StorageView;
ut.EditorExtensions.EntityLayer._view = ut.EditorExtensions.EntityLayer.StorageView;
ut.EditorExtensions.EntityLayer.StorageView._isSharedComp = ut.EditorExtensions.EntityLayer._isSharedComp = false;
ut.EditorExtensions.EntityLayer.StorageView._fromPtr = ut.EditorExtensions.EntityLayer._fromPtr;
ut.EditorExtensions.EntityLayer.StorageView._toPtr = ut.EditorExtensions.EntityLayer._toPtr;
ut.EditorExtensions.EntityLayer.StorageView._tempHeapPtr = ut.EditorExtensions.EntityLayer._tempHeapPtr;
ut.EditorExtensions.EntityLayer.StorageView._size = ut.EditorExtensions.EntityLayer._size;
ut.EditorExtensions.EntityLayer.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(ut.EditorExtensions.EntityLayer.StorageView.prototype, {
  layer: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
ut.EditorExtensions.EntityLayer._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.EditorExtensions.EntityLayer is a POD type, so a JavaScript side copy constructor ut.EditorExtensions.EntityLayer._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.EditorExtensions.EntityLayer._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.EntityLayer', 4, [
    {name: 'layer', offset: 0, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.EntityLayer, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.EntityLayer.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.EntityLayer.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.EntityLayer._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.EditorExtensions.EntityLayer.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.EntityLayer.cid; } } });
ut.EditorExtensions.EntityLayer.layer = { $ofs:0, $t:"int32_t", $c:ut.EditorExtensions.EntityLayer };
game.PrinceBehaviour_State = function(arg0, arg1, arg2, arg3) {
  this._initialized = (arg0 ? true : false);
  this._enabled = (arg1 ? true : false);
  this._onEnableCalled = (arg2 ? true : false);
  this._onDisableCalled = (arg3 ? true : false);
};
game.PrinceBehaviour_State.prototype = Object.create(null);
game.PrinceBehaviour_State.prototype.constructor = game.PrinceBehaviour_State;
Object.defineProperties(game.PrinceBehaviour_State.prototype, {
  initialized: {
    get: function() { return this._initialized; },
    set: function(v) { this._initialized = (v ? true : false); },
  },
  enabled: {
    get: function() { return this._enabled; },
    set: function(v) { this._enabled = (v ? true : false); },
  },
  onEnableCalled: {
    get: function() { return this._onEnableCalled; },
    set: function(v) { this._onEnableCalled = (v ? true : false); },
  },
  onDisableCalled: {
    get: function() { return this._onDisableCalled; },
    set: function(v) { this._onDisableCalled = (v ? true : false); },
  },
});
game.PrinceBehaviour_State._size = 4;
game.PrinceBehaviour_State._fromPtr = function(ptr, v) {
  v = v || Object.create(game.PrinceBehaviour_State.prototype);
  v._initialized = (HEAP8[ptr+0]?true:false);
  v._enabled = (HEAP8[ptr+1]?true:false);
  v._onEnableCalled = (HEAP8[ptr+2]?true:false);
  v._onDisableCalled = (HEAP8[ptr+3]?true:false);
  return v;
};
game.PrinceBehaviour_State._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.initialized)?1:0;
  HEAP8[ptr+1] = (v.enabled)?1:0;
  HEAP8[ptr+2] = (v.onEnableCalled)?1:0;
  HEAP8[ptr+3] = (v.onDisableCalled)?1:0;
};
game.PrinceBehaviour_State._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.initialized)?1:0;
  HEAP8[ptr+1] = (v.enabled)?1:0;
  HEAP8[ptr+2] = (v.onEnableCalled)?1:0;
  HEAP8[ptr+3] = (v.onDisableCalled)?1:0;
};
game.PrinceBehaviour_State._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.PrinceBehaviour_State._toTempHeapPtr(ptr, v);
  return ptr;
};
game.PrinceBehaviour_State.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.PrinceBehaviour_State.StorageView.prototype = Object.create(null);
game.PrinceBehaviour_State.StorageView.prototype.constructor = game.PrinceBehaviour_State.StorageView;
game.PrinceBehaviour_State._view = game.PrinceBehaviour_State.StorageView;
game.PrinceBehaviour_State.StorageView._isSharedComp = game.PrinceBehaviour_State._isSharedComp = false;
game.PrinceBehaviour_State.StorageView._fromPtr = game.PrinceBehaviour_State._fromPtr;
game.PrinceBehaviour_State.StorageView._toPtr = game.PrinceBehaviour_State._toPtr;
game.PrinceBehaviour_State.StorageView._tempHeapPtr = game.PrinceBehaviour_State._tempHeapPtr;
game.PrinceBehaviour_State.StorageView._size = game.PrinceBehaviour_State._size;
game.PrinceBehaviour_State.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.PrinceBehaviour_State.StorageView.prototype, {
  initialized: {
    get: function() { return (HEAP8[this._ptr+0]?true:false); },
    set: function(v) { HEAP8[this._ptr+0] = (v)?1:0; },
  },
  enabled: {
    get: function() { return (HEAP8[this._ptr+1]?true:false); },
    set: function(v) { HEAP8[this._ptr+1] = (v)?1:0; },
  },
  onEnableCalled: {
    get: function() { return (HEAP8[this._ptr+2]?true:false); },
    set: function(v) { HEAP8[this._ptr+2] = (v)?1:0; },
  },
  onDisableCalled: {
    get: function() { return (HEAP8[this._ptr+3]?true:false); },
    set: function(v) { HEAP8[this._ptr+3] = (v)?1:0; },
  },
});
game.PrinceBehaviour_State._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.PrinceBehaviour_State is a POD type, so a JavaScript side copy constructor game.PrinceBehaviour_State._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.PrinceBehaviour_State._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.PrinceBehaviour_State', 4, [
    {name: 'initialized', offset: 0, type: ut.meta.getType('bool')},
    {name: 'enabled', offset: 1, type: ut.meta.getType('bool')},
    {name: 'onEnableCalled', offset: 2, type: ut.meta.getType('bool')},
    {name: 'onDisableCalled', offset: 3, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.PrinceBehaviour_State, { cid: { configurable: true, get: function() { delete game.PrinceBehaviour_State.cid; var offsetsPtr = 0, offsetsCount = 0; return game.PrinceBehaviour_State.cid = Module._ut_component_register_cid_with_type(game.PrinceBehaviour_State._typeDesc, 1, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.PrinceBehaviour_State.StorageView, { cid: { configurable: true, get: function() { return game.PrinceBehaviour_State.cid; } } });
game.PrinceBehaviour_State.initialized = { $ofs:0, $t:"bool", $c:game.PrinceBehaviour_State };
game.PrinceBehaviour_State.enabled = { $ofs:1, $t:"bool", $c:game.PrinceBehaviour_State };
game.PrinceBehaviour_State.onEnableCalled = { $ofs:2, $t:"bool", $c:game.PrinceBehaviour_State };
game.PrinceBehaviour_State.onDisableCalled = { $ofs:3, $t:"bool", $c:game.PrinceBehaviour_State };
game.ShootInitializeBehaviour_State = function(arg0, arg1, arg2, arg3) {
  this._initialized = (arg0 ? true : false);
  this._enabled = (arg1 ? true : false);
  this._onEnableCalled = (arg2 ? true : false);
  this._onDisableCalled = (arg3 ? true : false);
};
game.ShootInitializeBehaviour_State.prototype = Object.create(null);
game.ShootInitializeBehaviour_State.prototype.constructor = game.ShootInitializeBehaviour_State;
Object.defineProperties(game.ShootInitializeBehaviour_State.prototype, {
  initialized: {
    get: function() { return this._initialized; },
    set: function(v) { this._initialized = (v ? true : false); },
  },
  enabled: {
    get: function() { return this._enabled; },
    set: function(v) { this._enabled = (v ? true : false); },
  },
  onEnableCalled: {
    get: function() { return this._onEnableCalled; },
    set: function(v) { this._onEnableCalled = (v ? true : false); },
  },
  onDisableCalled: {
    get: function() { return this._onDisableCalled; },
    set: function(v) { this._onDisableCalled = (v ? true : false); },
  },
});
game.ShootInitializeBehaviour_State._size = 4;
game.ShootInitializeBehaviour_State._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ShootInitializeBehaviour_State.prototype);
  v._initialized = (HEAP8[ptr+0]?true:false);
  v._enabled = (HEAP8[ptr+1]?true:false);
  v._onEnableCalled = (HEAP8[ptr+2]?true:false);
  v._onDisableCalled = (HEAP8[ptr+3]?true:false);
  return v;
};
game.ShootInitializeBehaviour_State._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.initialized)?1:0;
  HEAP8[ptr+1] = (v.enabled)?1:0;
  HEAP8[ptr+2] = (v.onEnableCalled)?1:0;
  HEAP8[ptr+3] = (v.onDisableCalled)?1:0;
};
game.ShootInitializeBehaviour_State._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.initialized)?1:0;
  HEAP8[ptr+1] = (v.enabled)?1:0;
  HEAP8[ptr+2] = (v.onEnableCalled)?1:0;
  HEAP8[ptr+3] = (v.onDisableCalled)?1:0;
};
game.ShootInitializeBehaviour_State._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.ShootInitializeBehaviour_State._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ShootInitializeBehaviour_State.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.ShootInitializeBehaviour_State.StorageView.prototype = Object.create(null);
game.ShootInitializeBehaviour_State.StorageView.prototype.constructor = game.ShootInitializeBehaviour_State.StorageView;
game.ShootInitializeBehaviour_State._view = game.ShootInitializeBehaviour_State.StorageView;
game.ShootInitializeBehaviour_State.StorageView._isSharedComp = game.ShootInitializeBehaviour_State._isSharedComp = false;
game.ShootInitializeBehaviour_State.StorageView._fromPtr = game.ShootInitializeBehaviour_State._fromPtr;
game.ShootInitializeBehaviour_State.StorageView._toPtr = game.ShootInitializeBehaviour_State._toPtr;
game.ShootInitializeBehaviour_State.StorageView._tempHeapPtr = game.ShootInitializeBehaviour_State._tempHeapPtr;
game.ShootInitializeBehaviour_State.StorageView._size = game.ShootInitializeBehaviour_State._size;
game.ShootInitializeBehaviour_State.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.ShootInitializeBehaviour_State.StorageView.prototype, {
  initialized: {
    get: function() { return (HEAP8[this._ptr+0]?true:false); },
    set: function(v) { HEAP8[this._ptr+0] = (v)?1:0; },
  },
  enabled: {
    get: function() { return (HEAP8[this._ptr+1]?true:false); },
    set: function(v) { HEAP8[this._ptr+1] = (v)?1:0; },
  },
  onEnableCalled: {
    get: function() { return (HEAP8[this._ptr+2]?true:false); },
    set: function(v) { HEAP8[this._ptr+2] = (v)?1:0; },
  },
  onDisableCalled: {
    get: function() { return (HEAP8[this._ptr+3]?true:false); },
    set: function(v) { HEAP8[this._ptr+3] = (v)?1:0; },
  },
});
game.ShootInitializeBehaviour_State._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.ShootInitializeBehaviour_State is a POD type, so a JavaScript side copy constructor game.ShootInitializeBehaviour_State._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.ShootInitializeBehaviour_State._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.ShootInitializeBehaviour_State', 4, [
    {name: 'initialized', offset: 0, type: ut.meta.getType('bool')},
    {name: 'enabled', offset: 1, type: ut.meta.getType('bool')},
    {name: 'onEnableCalled', offset: 2, type: ut.meta.getType('bool')},
    {name: 'onDisableCalled', offset: 3, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.ShootInitializeBehaviour_State, { cid: { configurable: true, get: function() { delete game.ShootInitializeBehaviour_State.cid; var offsetsPtr = 0, offsetsCount = 0; return game.ShootInitializeBehaviour_State.cid = Module._ut_component_register_cid_with_type(game.ShootInitializeBehaviour_State._typeDesc, 1, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.ShootInitializeBehaviour_State.StorageView, { cid: { configurable: true, get: function() { return game.ShootInitializeBehaviour_State.cid; } } });
game.ShootInitializeBehaviour_State.initialized = { $ofs:0, $t:"bool", $c:game.ShootInitializeBehaviour_State };
game.ShootInitializeBehaviour_State.enabled = { $ofs:1, $t:"bool", $c:game.ShootInitializeBehaviour_State };
game.ShootInitializeBehaviour_State.onEnableCalled = { $ofs:2, $t:"bool", $c:game.ShootInitializeBehaviour_State };
game.ShootInitializeBehaviour_State.onDisableCalled = { $ofs:3, $t:"bool", $c:game.ShootInitializeBehaviour_State };
game.GoalCollisionSystemJS = ut.System.define({
  name: "game.GoalCollisionSystemJS"
});
game.GravitySystemJS = ut.System.define({
  name: "game.GravitySystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart"]
});
game.InputSystemJS = ut.System.define({
  name: "game.InputSystemJS"
});
game.PrinceSpawnerSystemJS = ut.System.define({
  name: "game.PrinceSpawnerSystemJS"
});
game.ShootHitSystemJS = ut.System.define({
  name: "game.ShootHitSystemJS"
});
game.ShootNumberDisplaySystemJS = ut.System.define({
  name: "game.ShootNumberDisplaySystemJS"
});
game.VelocitySystemJS = ut.System.define({
  name: "game.VelocitySystemJS"
});
game.PrinceBehaviour_OnEntityUpdateJS = ut.System.define({
  name: "game.PrinceBehaviour_OnEntityUpdateJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart"]
});
game.ShootInitializeBehaviour_OnEntityEnableJS = ut.System.define({
  name: "game.ShootInitializeBehaviour_OnEntityEnableJS"
 ,updatesBefore: ["UTiny.Shared.InputFence"]
});




((function (ut) {

    var ComponentSystem = /** @class */ (function () {
        
        function ComponentSystem() {}

        ComponentSystem.prototype._MakeSystemFn = function () {
            var _this = this;
            return function (scheduler, world) {
                _this.scheduler = scheduler;
                _this.world = world;
                _this.OnUpdate();
            };
        };
        return ComponentSystem;
    }());
    ut.ComponentSystem = ComponentSystem;

    function executeAfter() { }
    ut.executeAfter = executeAfter;

    function executeBefore() { }
    ut.executeBefore = executeBefore;

    function requiredComponents() { }
    ut.requiredComponents = requiredComponents;

    function optionalComponents() { }
    ut.optionalComponents = optionalComponents;

    var EntityFilter = /** @class */ (function () {
        function EntityFilter() {}
        EntityFilter.prototype.Read = function (world, entity) {};
        EntityFilter.prototype.Reset = function () {};
        EntityFilter.prototype.ForEach = function (world, callback) {
            var _this = this;
            world.forEach(this.constructor._Components, function(entity) {
                _this.Read(world, entity);
                callback(entity);
                if (world.exists(entity)) {
                    _this.Write(world, entity);
                }
            });
        };
        return EntityFilter;
    }());
    ut.EntityFilter = EntityFilter;

    function usingFilters() { }
    ut.usingFilters = usingFilters;

    var ComponentBehaviour = /** @class */ (function () {
        function ComponentBehaviour() { }
        ComponentBehaviour.prototype.IsEnabled = function (world, entity) {
            var stateType = this.constructor._StateType;
            return world.hasComponent(entity, stateType) && world.getComponentData(entity, stateType).enabled;
        };
        ComponentBehaviour.prototype.Enable = function (world, entity) {
            var stateType = this.constructor._StateType;
            var hasState = world.hasComponent(entity, stateType);
            var state = hasState ? world.getComponentData(entity, stateType) : new stateType;
            if (!state.enabled) {
                state.enabled = true;
                state.onEnableCalled = false;
                state.onDisableCalled = false;
                if (hasState) {
                    world.setComponentData(entity, state);
                } else {
                    world.addComponentData(entity, state);
                }
            }
        };
        ComponentBehaviour.prototype.Disable = function (world, entity) {
            var stateType = this.constructor._StateType;
            var hasState = world.hasComponent(entity, stateType);
            var state = hasState ? world.getComponentData(entity, stateType) : new stateType;
            if (state.enabled) {
                state.enabled = false;
                state.onEnableCalled = false;
                state.onDisableCalled = false;
                if (hasState) {
                    world.setComponentData(entity, state);
                } else {
                    world.addComponentData(entity, state);
                }
            }
        };
        ComponentBehaviour.prototype._MakeOnEntityEnable = function () {
            var _this = this;
            var _stateType = this.constructor._StateType;
            return function (scheduler, world) {
                var _filter = _this._GetFilter();
                _this.scheduler = scheduler;
                _this.world = world;
                _filter.ForEach(_this.world, function(entity) {
                    var hasState = _this.world.hasComponent(entity, _stateType);
                    var state = hasState ? _this.world.getComponentData(entity, _stateType) : new _stateType;
                    if (!hasState || !state.initialized) {
                        state.enabled = true;
                        state.initialized = true;
                    }
                    try {
                        if (!state.onEnableCalled && state.enabled) {
                            state.onEnableCalled = true;
                            _this.entity = entity;
                            _this.OnEntityEnable();
                        }
                    } finally {
                        if (_this.world.exists(entity)) {
                            if (hasState) {
                                _this.world.setComponentData(entity, state);
                            } else {
                                _this.world.addComponentData(entity, state);
                            }
                        }
                    }
                });
                _filter.Reset();
            };
        };
        ComponentBehaviour.prototype._MakeOnEntityUpdate = function () {
            var _this = this;
            var _stateType = this.constructor._StateType;
            return function (scheduler, world) {
                var _filter = _this._GetFilter();
                _this.scheduler = scheduler;
                _this.world = world;
                _filter.ForEach(_this.world, function(entity) {
                    var hasState = _this.world.hasComponent(entity, _stateType);
                    var state = hasState ? _this.world.getComponentData(entity, _stateType) : new _stateType;
                    if (!hasState || !state.initialized) {
                        state.enabled = true;
                        state.initialized = true;
                        if (hasState) {
                            _this.world.setComponentData(entity, state);
                        } else {
                            _this.world.addComponentData(entity, state);
                        }
                    }
                    if (state.enabled) {
                        _this.entity = entity;
                        _this.OnEntityUpdate();
                    }
                });
                _filter.Reset();
            };
        };
        ComponentBehaviour.prototype._MakeOnEntityDisable = function () {
            var _this = this;
            var _stateType = this.constructor._StateType;
            return function (scheduler, world) {
                var _filter = _this._GetFilter();
                _this.scheduler = scheduler;
                _this.world = world;
                _filter.ForEach(_this.world, function(entity) {
                    var hasState = _this.world.hasComponent(entity, _stateType);
                    var state = hasState ? _this.world.getComponentData(entity, _stateType) : new _stateType;
                    if (!hasState || !state.initialized) {
                        state.enabled = true;
                        state.initialized = true;
                    }
                    try {
                        if (!state.onDisableCalled && !state.enabled) {
                            state.onDisableCalled = true;
                            _this.entity = entity;
                            _this.OnEntityDisable();
                        }
                    } finally {
                        if (_this.world.exists(entity)) {
                            if (hasState) {
                                _this.world.setComponentData(entity, state);
                            } else {
                                _this.world.addComponentData(entity, state);
                            }
                        }
                    }
                });
                _filter.Reset();
            };
        };
        return ComponentBehaviour;
    }());
    ut.ComponentBehaviour = ComponentBehaviour;


})(ut || (ut = {})));
