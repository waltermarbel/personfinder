/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, {Component} from 'react';
import {injectIntl} from 'react-intl';

import Footer from './../components/Footer.js';
import PageHeader from './../components/PageHeader.js';

/**
 * Wrapper component for rendering static pages.
 */
const StaticPageWrapper = (props) => (
  <div className='pf-linearwrap'>
    <PageHeader
        backButtonTarget={'/'}
        title={props.pageTitle} />
    <div className='staticpagewrapper-content'>
      {props.children}
    </div>
    <Footer />
  </div>
);

export default injectIntl(StaticPageWrapper);