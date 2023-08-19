import React from 'react';
import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div>
    <Breadcrumb style={{padding:'2px', marginLeft:'15px'}}>
      <Breadcrumb.Item>
        <Link to="/"><FaHome/> Home</Link>
      </Breadcrumb.Item>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Breadcrumb.Item key={name}>{name}</Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item key={name}>
            <Link to={routeTo}>{name}</Link>
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
