interface ImagePlaceholderProps {
    width?: string;
    height?: string;
    text: string;
    className?: string;
    bgColor?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
    width = "100%",
    height = "300px",
    text,
    className = "",
    bgColor = "bg-jaggery-200"
}) => {
    return (
        <div
            className={`${bgColor} flex items-center justify-center text-earth-700 font-medium ${className}`}
            style={{ width, height }}
        >
            <div className="text-center">
                <div className="text-4xl mb-2">🥄</div>
                <div className="text-sm">{text}</div>
            </div>
        </div>
    );
};

export default ImagePlaceholder; 