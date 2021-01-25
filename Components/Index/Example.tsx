import React,{useCallback,useState} from "react";
import styles from './Example.module.scss'
interface Props {}
import ImagesZoom from './ImagesZoom.js';

function Exapmle(props: Props) {
  const {} = props;
  const [showImagesZoom, setShowImagesZoom] = useState(false);

  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);

  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);


  return (
    <>
      <div style={{ display: 'inline-block', width: '100%', textAlign: 'center', verticalAlign: 'middle' }} onClick={onZoom}>
          <h5>예시보기</h5>
      </div>
      {showImagesZoom && <ImagesZoom onClose={onClose} />}
      </>
  );
}

export default Exapmle;
