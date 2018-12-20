
namespace game {

    /** New System */
    export class InputSystem extends ut.ComponentSystem {
        
        public static clickFrom = new Vector2(0, 0);
        public static clickTo = new Vector2(0, 0);

        OnUpdate():void {
            this.world.forEach([ut.Core2D.TransformLocalPosition, game.ShootPoint],
                (transform, shootPoint) => {
                    if (ut.Runtime.Input.getMouseButtonDown(0)) {
                        InputSystem.clickFrom = ut.Runtime.Input.getInputPosition();
                    }

                    if (ut.Runtime.Input.getMouseButtonUp(0) && 0 < shootPoint.shoots) {
                        InputSystem.clickTo = ut.Runtime.Input.getInputPosition();
                        let instance = ut.EntityGroup.instantiate(this.world, 'game.ShootEntities')[0];
                        this.world.setComponentData(instance, transform);
                        shootPoint.shoots--;
                    }

                    if(ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.Space)) {
                        let instance = ut.EntityGroup.instantiate(this.world, 'game.PrinceEntities')[0];
                    }
                });
            }
    }
}
