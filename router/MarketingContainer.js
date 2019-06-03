import React from 'react';
import { Table, Divider, Tag, Button } from 'antd';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

const { Column, ColumnGroup } = Table;

const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

class MarketingContainer extends React.Component {
  handleAdd = () => {
    const { dispatch, match } = this.props;
    dispatch(routerRedux.push(`${match.url}/add`));
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <Button onClick={this.handleAdd}>新增</Button>
        </div>
        <Table dataSource={data}>
          <ColumnGroup title="Name">
            <Column title="First Name" dataIndex="firstName" key="firstName" />
            <Column title="Last Name" dataIndex="lastName" key="lastName" />
          </ColumnGroup>
          <Column title="Age" dataIndex="age" key="age" />
          <Column title="Address" dataIndex="address" key="address" />
          <Column
            title="Tags"
            dataIndex="tags"
            key="tags"
            render={tags => (
              <span>
                {tags.map(tag => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </span>
            )}
          />
          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <span>
                <a>
                  Invite
                  {record.lastName}
                </a>
                <Divider type="vertical" />
                <a>Delete</a>
              </span>
            )}
          />
        </Table>
      </React.Fragment>
    );
  }
}

export default connect(({ global }) => {
  return { menus: global.menus, urlMap: global.urlMap };
})(MarketingContainer);
