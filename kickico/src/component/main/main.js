import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Подключаем страницы
import Home from '../pages/home/home'
import RatingCompaning from '../pages/rating/ratingCompaning'
import CampaignsFinished from '../pages/campaigns/finished'
import Faq from '../pages/faq/faq'

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/rating' component={RatingCompaning} />
        <Route path='/campaigns/finished' component={CampaignsFinished} />
        <Route path='/faq' component={Faq} />
    </Switch>
);

export default Main
