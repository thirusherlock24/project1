import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CustomHook() {
  const navigate = useNavigate();

  useEffect(() => {
    let isNavigating = false;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log('Scroll Position:', scrollPosition);

      

    
      const currentUrl = window.location.pathname;

      if (!isNavigating) {
        if (scrollPosition > 30 && currentUrl === '/') {
          console.log('Scrolling to: Home');
          navigate('/project');
          isNavigating = true;
        } else if (
          scrollPosition >= 44 &&
          currentUrl === '/project'
        ) {
          console.log('Scrolling to: Project');
          navigate('/contact');
          isNavigating = true;
        } 
        else if(scrollPosition < 1 &&
          currentUrl === '/project')
          {
            navigate('/');
          isNavigating = true;
          }
        else if (scrollPosition < 25 && currentUrl === '/contact') {
          console.log('Scrolling to: Contact');
          navigate('/project');
          isNavigating = true;
        }
      }

  
      setTimeout(() => {
        isNavigating = false;
      }, 2000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navigate]);

  return (
    <div>
      <div id="home">Home Content</div>
      <div id="project">Project Content</div>
      <div id="contact">Contact Content</div>
    </div>
  );
}
export default CustomHook;