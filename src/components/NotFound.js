import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class NotFound extends Component {

    render(){
      const { t } = this.props;
      return (
        <div className="text-center pt-5">
            <h1> 404 - {t("notFound")}</h1>
            <a className="btn btn-lg btn-outline-danger" href="/"> {t("backHome")} </a>
        </div>
      )
    }
}

export default withTranslation()(NotFound);
