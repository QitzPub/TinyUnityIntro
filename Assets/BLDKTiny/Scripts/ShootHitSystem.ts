
namespace game {

    /** New System */
    export class ShootHitSystem extends ut.ComponentSystem {
        
        OnUpdate():void {
            this.world.forEach([ut.Entity, game.Shoot, ut.HitBox2D.HitBoxOverlapResults, ut.Core2D.TransformLocalPosition], 
                (entity, shoot, overlap, position) => {
                    let overlaps = overlap.overlaps;
                    if(0 < overlaps.length) {
                        for(var i = 0; i < overlaps.length; i++) {
                            if(this.world.hasComponent(overlaps[i].otherEntity, game.GroundingHitBox) || this.world.hasComponent(overlaps[i].otherEntity, game.ClimbingHitBox)) {
                                var e = ut.EntityGroup.instantiate(this.world, `game.PlantEntities`)[0];
                                this.world.setComponentData(e, position);
                                this.world.removeComponent(entity, game.Shoot);
                                this.world.removeComponent(entity, ut.Physics2D.Velocity2D);
                                this.world.removeComponent(entity, ut.HitBox2D.RectHitBox2D);
                                return; 
                            }
                        }
                    }
            });
        }
    }
}
