
function PageWrapper(props) {
  return (
    <div class="pcoded-main-container">
      <div class="pcoded-wrapper">
        <div class="pcoded-content">
          <div class="pcoded-inner-content">
            <div class="main-body">
              <div class="page-wrapper">
                  {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default PageWrapper;