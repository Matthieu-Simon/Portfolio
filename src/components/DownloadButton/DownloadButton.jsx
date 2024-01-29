import './Download.css';

const DownloadButton = () => {
        const downloadCV = () => {
            const cvUrl = '../../../public/CV_MS.pdf';
            window.open(cvUrl, '_blank');
        };

        return(
            <button className="btn-resume" onClick={downloadCV}><i className='bx bx-file icon-cv'></i></button>
        );
};

export default DownloadButton;