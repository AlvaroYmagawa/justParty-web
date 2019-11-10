import React from 'react';
import { useSelector } from 'react-redux';

import UserDashboard from './User';
import PromoterDashboard from './Promoter';

export default function Dashboard() {
  const isPromoter = useSelector(state => state.user.profile.promoter);

  return isPromoter ? <PromoterDashboard /> : <UserDashboard />;
}
