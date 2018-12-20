namespace game {
    export class GoalCollisionSystem extends ut.ComponentSystem {
        private isAllFinished = true;

        OnUpdate():void {
            this.isAllFinished = true;
            this.world.forEach([game.Goal, ut.HitBox2D.HitBoxOverlapResults], 
                (goal, overlap) => {
                    if(0 < overlap.overlaps.length && !goal.isReached) {
                        if(overlap.overlaps[0].otherEntity != null) {
                            if(this.world.hasComponent(overlap.overlaps[0].otherEntity, game.Prince)) {
                                goal.isReached = true;
                                overlap.overlaps[0].otherEntity
                                this.world.destroyEntity(overlap.overlaps[0].otherEntity);
                            }
                        }
                    }
                });

            this.world.forEach([game.Goal], 
                (goal) => {
                    if(!goal.isReached) {
                        this.isAllFinished = false;
                    }
                });
    
            if(this.isAllFinished) {
                console.log("Finished");
            }
        }
    }
}
