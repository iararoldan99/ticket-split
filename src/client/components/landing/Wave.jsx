import wave from '../../assets/img/wave.svg';

const Wave = () => {
    return (
        <div className="absolute bottom-0 left-0 w-full">
            <img src={wave} alt="Wave" className="wave-animation" />
        </div>
    );
};

export default Wave;