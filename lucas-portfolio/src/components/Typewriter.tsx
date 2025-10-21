import { TypeAnimation } from 'react-type-animation';

const Typewriter = () => {
    return (
        <div>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Hi, I'm Lucas",
                    3000
                ]}
                wrapper="span"
                speed={1}
                deletionSpeed={1}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={0}
            />
        </div>
    )
}

export default Typewriter
