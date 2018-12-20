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
    }
}