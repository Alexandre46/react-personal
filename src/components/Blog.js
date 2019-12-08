import React, { lazy, Component, Suspense } from 'react';
import { importMDX } from 'mdx.macro';

const PostOne = lazy(() => importMDX('../Blog/Post1.mdx'));
const PostTwo = lazy(() => importMDX('../Blog/laravel-api-models.mdx'));

class Blog extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <PostOne />
          <PostTwo />
        </Suspense>
      </div>
    );
  }
}
export default Blog;