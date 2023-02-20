import styles from "components/bottomPageGradient/bottomPageGradient.module.scss";

function BottomPageGradient() {
  return (
    <div className="fixed bottom-0 right-0 left-0 pointer-events-none">
      <div className={`${styles.bottom_page_gradient} max-width-screen`} />
    </div>
  );
}

export default BottomPageGradient;
