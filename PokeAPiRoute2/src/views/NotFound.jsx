const NotFound = () => {
    return (
        <div className="">
            <p className="">HTTP Error 404</p>
            <p><span className="fw-bold">La página que buscas no existe</span></p>
            <img src="data:image/jpeg;base64,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" alt="PsyduckNot" />
        </div>
    );
};

export default NotFound;