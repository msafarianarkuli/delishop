import styles from "view/home/home.module.scss";

function HomeGradient() {
  return (
    <div className="fixed bottom-0 right-0 left-0 pointer-events-none">
      <div className={`${styles.home_gradient} max-width-screen`} />
    </div>
  );
}

export default HomeGradient;
