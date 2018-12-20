using UTiny;
using UTiny.Core2D;
using UTiny.Math;
using UTiny.Shared;
using ut;
using UTiny.HTML;
using UTiny.Rendering;
using ut.EditorExtensions;
using UTiny.UILayout;
using UTiny.Text;
using UTiny.Audio;
using UTiny.Physics2D;
using UTiny.HitBox2D;
using UTiny.Particles;
using UTiny.Interpolation;

/*
 * !!! TEMP UNITL PROPER SCENE FORMAT !!!
 */
namespace entities.game
{
    namespace GameScene
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Level0
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace PlantEntities
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace PrinceEntities
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace ShootEntities
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Ground
    {
        public struct Component : IComponentData
        {
        }
    }
}

namespace game
{
    public struct ClimbingHitBox : IComponentData
    {
    }
    public struct GameState : IComponentData
    {
        public game.GameStateEnum state;
    }
    public struct GameStateDisplay : IComponentData
    {
        public string gameStateStr;
    }
    public struct Goal : IComponentData
    {
        public bool isReached;
    }
    public struct Gravity : IComponentData
    {
        public Vector2 gravity;
    }
    public struct GroundingHitBox : IComponentData
    {
    }
    public struct Prince : IComponentData
    {
        public bool isFlip;
        public game.PrinceMoveState state;
    }
    public struct PrinceSpawner : IComponentData
    {
        public float interval;
        public short princes;
        public float time;
    }
    public struct Shoot : IComponentData
    {
    }
    public struct ShootNumberDisplay : IComponentData
    {
    }
    public struct ShootPoint : IComponentData
    {
        public short shoots;
    }
    public enum GameStateEnum
    {
        NotInitialized = 0
        , Normal = 1
        , Stretching = 2
        , Moving = 3
    }
    public enum PrinceMoveState
    {
        Flying = 0
        , Grounding = 1
        , Climbing = 2
    }
}

namespace ut.Core2D
{
    namespace layers
    {
        public struct Default : IComponentData
        {
        }
        public struct TransparentFX : IComponentData
        {
        }
        public struct IgnoreRaycast : IComponentData
        {
        }
        public struct Water : IComponentData
        {
        }
        public struct UI : IComponentData
        {
        }
        public struct PostProcessing : IComponentData
        {
        }
        public struct Cutscene : IComponentData
        {
        }
    }
}

namespace ut.Math
{
}

namespace ut
{
}

namespace ut.Shared
{
}

namespace ut.Core2D
{
}

namespace ut
{
}

namespace ut.HTML
{
}

namespace ut.Rendering
{
}

namespace ut.Rendering
{
}

namespace ut.HTML
{
}

namespace ut.Core2D
{
}

namespace ut.Rendering
{
}

namespace ut.Rendering
{
}

namespace ut.Core2D
{
}

namespace ut.EditorExtensions
{
    public struct AssetReferenceAnimationClip : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceAudioClip : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceSprite : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceSpriteAtlas : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTMP_FontAsset : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTexture2D : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTile : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct CameraCullingMask : IComponentData
    {
        public int mask;
    }
    public struct EntityLayer : IComponentData
    {
        public int layer;
    }
}

namespace ut.UILayout
{
}

namespace ut.Text
{
}

namespace ut.HTML
{
}

namespace ut.Audio
{
}

namespace ut.Physics2D
{
}

namespace ut.HitBox2D
{
}

namespace ut.Particles
{
}

namespace ut.Interpolation
{
}
namespace game
{
    public struct PrinceBehaviour_State : IComponentData
    {
        public bool initialized;
        public bool enabled;
        public bool onEnableCalled;
        public bool onDisableCalled;
    }
}
namespace game
{
    public struct ShootInitializeBehaviour_State : IComponentData
    {
        public bool initialized;
        public bool enabled;
        public bool onEnableCalled;
        public bool onDisableCalled;
    }
}
namespace game
{
    public class GoalCollisionSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class GravitySystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class InputSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class PrinceSpawnerSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class ShootHitSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class ShootNumberDisplaySystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class VelocitySystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class PrinceBehaviour_OnEntityUpdateJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.InputFence))]
    public class ShootInitializeBehaviour_OnEntityEnableJS : IComponentSystem
    {
    }
}
