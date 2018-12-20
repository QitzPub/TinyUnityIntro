
namespace game {

    /** New System */
    export class ShootNumberDisplaySystem extends ut.ComponentSystem {
        
        private shootNumber = 0;

        OnUpdate():void {
            this.world.forEach([game.ShootPoint],
                 (shootPoint) => {
                    this.shootNumber = shootPoint.shoots;
                }
            );
            this.world.forEach([game.ShootNumberDisplay, ut.Text.Text2DRenderer],
                (display, text) => {
                    text.text = `Shot: ` + this.shootNumber.toString();
                }
            );
        }
    }
}
