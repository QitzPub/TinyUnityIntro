
namespace game {

    /** New System */
    export class PrinceSpawnerSystem extends ut.ComponentSystem {
        
        private canSpawn = false;
        private deadPrinces = 0;

        OnUpdate():void {
            this.world.forEach([game.ShootPoint],
                (shootPoint) => {
                    this.canSpawn = shootPoint.shoots <= 0;
                });

            if(this.canSpawn) {
                this.world.forEach([game.PrinceSpawner, ut.Core2D.TransformLocalPosition],
                    (spawner, pos) => {
                        spawner.time += this.scheduler.deltaTime();
                        if(spawner.interval < spawner.time && 0 < spawner.princes) {
                            spawner.time = 0;
                            var instance = ut.EntityGroup.instantiate(this.world, 'game.PrinceEntities')[0];
                            this.world.setComponentData(instance, pos);
                            spawner.princes--;
                        }
                    }
                );
                }
        }
    }
}
