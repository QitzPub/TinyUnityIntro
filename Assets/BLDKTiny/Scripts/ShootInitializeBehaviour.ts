
namespace game {

    export class ShootInitializeBehaviourFilter extends ut.EntityFilter {
        shoot: game.Shoot;
        velocity: ut.Physics2D.Velocity2D;
    }

    export class ShootInitializeBehaviour extends ut.ComponentBehaviour {

        data: ShootInitializeBehaviourFilter;

        OnEntityEnable() : void {
            let vec = this.data.velocity.velocity;
            vec.x = (InputSystem.clickFrom.x - InputSystem.clickTo.x) / 30;
            vec.y = (InputSystem.clickFrom.y - InputSystem.clickTo.y) / 30;
            this.data.velocity.velocity = vec;
        }

        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        
        // this method is called for each entity matching the ShootInitializeBehaviourFilter signature, once when enabled
        //OnEntityEnable():void { }
        
        // this method is called for each entity matching the ShootInitializeBehaviourFilter signature, every frame it's enabled
        //OnEntityUpdate():void { }

        // this method is called for each entity matching the ShootInitializeBehaviourFilter signature, once when disabled
        //OnEntityDisable():void { }

    }
}
