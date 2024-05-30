import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');

  const editorState = BraftEditor.createEditorState(
    `<p><span class='abc'>def</span></p>`,
  );
  console.log(editorState.toHTML()); // <p>def</p>

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
        {/*<BraftEditor />*/}
      </div>
    </PageContainer>
  );
};

export default HomePage;
