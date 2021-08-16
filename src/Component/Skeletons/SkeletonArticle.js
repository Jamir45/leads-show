import SkeletonsElement from './SkeletonsElement';
import SkeletonSlider from './SkeletonSlider';
import './SkeletonsStyle.css'

const SkeletonArticle = () => {
   return (
      <div className="skeletonWrapper">
         <div className="skeletonArticle">
            <SkeletonsElement type="title" />
            <SkeletonsElement type="text" />
            <SkeletonsElement type="text" />
            <SkeletonsElement type="text" />
            <SkeletonsElement type="text" />
            <SkeletonsElement type="text" />
         </div>
         <SkeletonSlider />
      </div>
   );
};

export default SkeletonArticle;