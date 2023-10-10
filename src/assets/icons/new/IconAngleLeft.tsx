function IconAngleLeft({className, fill}: {className: string; fill?: string}) {
  return (
    <svg className={className} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.607345 7.30113L7.31255 1.23094C7.73907 0.844607 8.4304 0.844607 8.85672 1.23094C9.28307 1.61694 9.28307 2.24298 8.85672 2.62894L2.92385 8.00004L8.85672 13.3711C9.28307 13.7573 9.28307 14.3833 8.85672 14.7692C8.43037 15.1554 7.73887 15.1554 7.31234 14.7692L0.607138 8.69894C0.394065 8.50585 0.287597 8.25305 0.287597 8.00004C0.287597 7.74711 0.394272 7.49413 0.607345 7.30113Z"
        fill={fill}
      />
    </svg>
  );
}

export default IconAngleLeft;
