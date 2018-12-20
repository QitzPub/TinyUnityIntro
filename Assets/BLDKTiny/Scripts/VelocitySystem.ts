namespace game {
    export class VelocitySystem extends ut.ComponentSystem {

        OnUpdate():void {
            let dt = this.scheduler.deltaTime();
            this.world.forEach([ut.Core2D.TransformLocalPosition, ut.Physics2D.Velocity2D],
                (transform, velocity) => {
                    let pos = transform.position;
                    pos.x += velocity.velocity.x * dt;
                    pos.y += velocity.velocity.y * dt;
                    transform.position = pos;
                });
        }
    }
}
