import { FC, Fragment } from "react";
import { connect } from "react-redux";
import { getDemoData } from "./store/demoReducer";
import { Helmet } from "react-helmet";

interface IProps {
  content: string
  getDemoData: () => void
}

const Demo: FC<IProps> = (props) => {
  return (
    <Fragment>
      <Helmet>
        <title>简易的服务器端渲染框架 - DEMO</title>
        <meta name="description" content="服务器端渲染框架"></meta>
      </Helmet>
      <div>
        <div>这是一个demo页面</div>
        <h1>{props.content}</h1>
        <button
          onClick={(): void => {
            props.getDemoData && props.getDemoData();
          }}
        >
          刷新
        </button>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => {
  return {
    content: state?.demo?.content,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    getDemoData: () => {
      dispatch(getDemoData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Demo)