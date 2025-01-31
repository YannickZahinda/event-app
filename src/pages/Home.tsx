import eventPlanImage from '../assets/generated-image-preview.png';
import celebrateImage from '../assets/Allura - Proposal.png'
import Button from '../components/Button/Button';

const Home = () => {
  return (
    <div className="h-screen bg-blue-600 ">
        <div className='flex items-center justify-center text-white text-2xl'>
            <img 
            src={eventPlanImage} 
            alt="Home Illustration" 
            className="w-1/3 h-auto rounded-lg"
            />
           <img 
            src={celebrateImage} 
            alt="Home Illustration" 
            className="w-1/3 h-auto rounded-lg"
          />
        </div>
        <div className='text-center'>
            <p className='text-4xl text-white'> <strong>ES-TU PRET(E) A RENDRE TON EVENEMENT <br /> INOUBLIABLE ?</strong> </p>
            <Button className = 'text-white' text ='Commencer' />
        </div>
      
    </div>
  );
};

export default Home;
