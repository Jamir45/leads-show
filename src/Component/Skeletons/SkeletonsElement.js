import './SkeletonsStyle.css'

const SkeletonsElement = ({ type }) => {
   return (
      <div className={`skeleton ${type}`}></div>
   );
};

export default SkeletonsElement;