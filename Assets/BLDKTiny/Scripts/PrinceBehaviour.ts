
namespace game {

    export class PrinceBehaviourFilter extends ut.EntityFilter {
        prinice: game.Prince;
        overlap?: ut.HitBox2D.HitBoxOverlapResults;
        velocity: ut.Physics2D.Velocity2D;
    }

    export class PrinceBehaviour extends ut.ComponentBehaviour {

        private static readonly groundingVector = new Vector2(6, 0);
        private static readonly fallingVector = new Vector2(0, -8);
        private static readonly climbingVector = new Vector2(0, 6);

        data: PrinceBehaviourFilter;

        OnEntityUpdate():void {
            if(this.data.overlap == null) {
                this.data.velocity.velocity = PrinceBehaviour.fallingVector;
                return;
            }

            var overlaps = this.data.overlap.overlaps;
            var grounding = false;
            var climbing = false;

            if(0 < overlaps.length) {
                for(var i = 0; i < overlaps.length; i++) {
                    if(this.world.hasComponent(overlaps[i].otherEntity, game.GroundingHitBox)) {
                        grounding = true;
                    } else if(this.world.hasComponent(overlaps[i].otherEntity, game.ClimbingHitBox)) {
                        climbing = true;
                    }
                }
            }

            if(climbing) {
                this.data.velocity.velocity = PrinceBehaviour.climbingVector;
            } else if(grounding) {
                this.data.velocity.velocity = PrinceBehaviour.groundingVector;
            } else {
                this.data.velocity.velocity = PrinceBehaviour.fallingVector;
            }
        }
    }
}
