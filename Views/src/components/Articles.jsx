import "./Articles.css"
function Articles() {
  return (
    <div className="Articles">
      {/* 1 */}
      <div>
        <p>Read top articles from health experts</p>
        <p>
          Health articles that keep you informed about good health practices and
          achieve your goals.
        </p>
        <button>See all articles</button>
      </div>
      {/* 2 */}
      <div>
        <div>
          <img
            src="https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910"
            alt="err"
          />
        </div>
        <div>
          <p>CORONAVIRUS</p>
          <p>12 Coronavirus Myths and Facts That You Should Be Aware Of</p>

          <p>Dr. Diana Borgio</p>
        </div>
      </div>
      {/* 3 */}
      <div>
        <div>
          <img
            src="https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c"
            alt="err"
          />
        </div>
        <div>
          <p>VITAMINS AND SUPPLEMENTS</p>
          <p>
            Eating Right to Build Immunity Against Cold and Viral Infections
          </p>

          <p>Dr. Diana Borgio</p>
        </div>
      </div>
    </div>
  );
}

export default Articles;
