import React, { useState } from "react"

export interface TreeNodeProps {
  id: string
  title: string
  hasChild: boolean
  isExpand: boolean
  handleExpanded: Function
}
function TreeNode(props: TreeNodeProps) {
  const { id, title, hasChild, isExpand, handleExpanded } = props
  return (
    <div
      onClick={() => {
        handleExpanded(id)
      }}
    >
      <span style={{ marginLeft: 18 * id?.split("-").length + "px" }}></span>
      <span>{hasChild ? (isExpand ? "-" : "+") : ""}</span>
      {title}
    </div>
  )
}

export interface TreeProps {
  treeData: Array<any>
  expand?: Array<string>
}
function Tree(props: TreeProps) {
  const { treeData } = props
  const [expand, setExpand] = useState(props.expand || [])

  const handleExpanded = (id: string) => {
    const temp = [...expand]
    const index = expand.indexOf(id)
    if (index === -1) {
      temp.push(id)
    } else {
      temp.splice(index)
    }
    setExpand(temp)
  }

  const render: any = (treeData: Array<any>) => {
    return treeData.map((item: any) => {
      const { key, title, children } = item
      const isExpand = expand.includes(key)
      const hasChild = children?.length > 0
      return (
        <>
          <TreeNode
            key={key}
            id={key}
            title={title}
            hasChild={hasChild}
            isExpand={isExpand}
            handleExpanded={handleExpanded}
          ></TreeNode>
          {hasChild && isExpand && render(item.children)}
        </>
      )
    })
  }

  return <div>{render(treeData)}</div>
}

export default Tree
