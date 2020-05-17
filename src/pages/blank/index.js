import React, { PureComponent } from 'react';

export default class Index extends PureComponent{

    componentDidMount() {
       const { location:{state} } = this.props;
       if(state){
           const div=document.createElement('divform');
            div.innerHTML= state;                                    ;
            document.body.appendChild(div);
            document.forms[0].acceptCharset='utf-8';//保持与支付宝默认编码格式一致，如果不一致将会出现：调试错误，请回到请求来源地，重新发起请求，错误代码 invalid-signature 错误原因: 验签出错，建议检查签名字符串或签名私钥与应用公钥是否匹配
            document.forms[0].submit();
       }
    }
    render(){
        return(<>
          
        </>);
    }
}