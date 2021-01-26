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
      <div style={{ verticalAlign: 'middle' }} >
      <button onClick={onZoom} className={styles.exampleButton}>예시보기</button></div>
      {showImagesZoom && <ImagesZoom onClose={onClose} />}
      </>
  );
}

export default Exapmle;
