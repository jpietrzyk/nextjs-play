const SearchForm = () => (
  <form method="post">
    <button title="Search" value="S" type="submit">
      <i className="fa fa-filter"></i>
    </button>
    <input type="text" className="textbox" placeholder="What do you want to see?" />
    <style jsx>{`
      form {
        outline: 0;
        float: left;
        box-shadow: 0 1px 8px rgba(209, 209, 209, 0.3), 0 1px 8px rgba(209, 209, 209, 0.3);
        border-radius: 1px;
      }
      input.textbox {
        font-family: 'Ubuntu Condensed', sans-serif;
        outline: 0;
        height: 66px;
        width: 650px;
        line-height: 66px;
        padding: 0 16px;
        background-color: rgba(255, 255, 255, 0.8);
        color: #B9B9B9;
        border: 0;
        float: left;
        border-radius: 0 1px 1px 0;
        font-size: 30px;
      }
      input.textbox::placeholder {
        color: #B9B9B9;
        font-family: 'Ubuntu Condensed', sans-serif;
        line-height: 66px;
        font-size: 30px;
      }

      button {
        outline: 0;
        border: 0;
        background-color: rgba(255, 255, 255, 0.8);
        float: left;
        height: 66px;
        width: 42px;
        text-align: center;
        line-height: 66px;
        color: #B9B9B9;
        font-size: 30px;
        text-rendering: auto;
        border-radius: 1px 0 0 1px;
      }
    `}</style>
  </form>
)

export default SearchForm
