namespace game {
    @ut.executeAfter(ut.Shared.UserCodeStart)
    @ut.executeBefore(ut.Shared.UserCodeEnd)

    export class GravitySystem extends ut.ComponentSystem {
        OnUpdate():void {
            var dt = this.scheduler.deltaTime();
            this.world.forEach([game.Gravity, ut.Physics2D.Velocity2D], (gravity, velocity) => {
                var v = velocity.velocity;
                var g = gravity.gravity;
                v.x += g.x * dt;
                v.y += g.y * dt;
                velocity.velocity = v;
            });
        }
    }
}