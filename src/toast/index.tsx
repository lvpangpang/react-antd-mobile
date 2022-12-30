import React from "react"
import ReactDOM from "react-dom"
import { v4 as uuidv4 } from "uuid"
import "./index.less"

function Item(props: { content: any }) {
  const { content } = props
  return <div className='notice'>{content}</div>
}

type StateType = {
  list: Array<any>
}
class List extends React.Component<any, StateType> {
  constructor(props: any) {
    super(props)
    this.state = {
      list: [],
    }
  }

  addItem = (item: any) => {
    const { duration = 3000 } = item
    const { list } = this.state
    item.key = uuidv4()
    if (duration > 0) {
      setTimeout(() => {
        this.removeItem((item as any).key)
      }, duration)
    }
    this.setState({
      list: [...list, item],
    })
  }

  removeItem = (key: string) => {
    const { list } = this.state
    const temp = list.filter((item: any) => {
      if (item.key === key) {
        return false
      }
      return true
    })
    this.setState({
      list: temp,
    })
  }

  render() {
    return (
      <div className='notice-list'>
        {this.state.list.map((props: any) => {
          return <Item {...props}></Item>
        })}
      </div>
    )
  }
}

;(List as any).getListInstance = () => {
  const div = document.createElement("div")
  document.body.appendChild(div)
  const instance = ReactDOM.render(<List></List>, div) // 获取类组件实例
  return {
    addItem: (itemProps: any) => {
      ;(instance as any).addItem(itemProps)
    },
  }
}

let listInstance: any
function toast(props: any) {
  // 只实例化一次
  if (!listInstance) {
    listInstance = (List as any).getListInstance()
  }
  listInstance.addItem({ ...props })
}

export default toast
