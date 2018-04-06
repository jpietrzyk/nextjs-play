import Link from 'next/link'

const Item = (props) => (
  <li>
    <Link href={props.href}>
      <a><i className={`fa fa-${props.icon}`}></i></a>
    </Link>
    <style jsx>{`
      li {
        text-align: center;
        padding: 10px 0;
        clear: both;
        display: block;
        font-size: 1.5em;
      }
      a {
        color: #a2a2a2;
      }
      a i.fa {
        font-weight: 300;
      }
    `}</style>
  </li>
)

export default Item
