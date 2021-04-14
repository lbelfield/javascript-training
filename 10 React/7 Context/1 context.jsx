// https://reactjs.org/docs/hooks-reference.html#usecontext

// Definition: 
// Context provides a way to pass data through the component tree 
// without having to pass props down manually at every level.

// Usually, data is passed top-down (parent to child) via props, 
// but such usage can be cumbersome for certain types of props
// Context is designed to share data that can be considered “global”

// Using Context: API
// Three parts:
// CreateContext, Provider, Consumer

// 1 React.createContext
  // provide a defaultValue
const MyContext = React.createContext(defaultValue);

// 2 Context.Provider
  // Provider does the heavy lifting and can be re-used
  // One Provider can be connected to many consumers. 
  // Providers can be nested to override values deeper within the tree.
  // If value not specified, takes defaultValue in createContext
<MyContext.Provider value={/* some value */}/>
value;


// 3 Context.Consumer
  // Consumer allows for that re-use
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>



// Why the class way is bad and hook is good:
  // 1 class: static variable - meaning you are restricted to a single context (eg if toolbar, can only use light)
  // hook: useContext Hook is much better because you can use multiple contexts (eg can use toolbar and another context)
  // 2 don't get christmas tree (ugly syntax with nested trees)

// 1 HOOKS:
const value = useContext(MyContext); // useContext must be the context object itself (not provider or consumer)


// Redux vs Context
// Redux has only one context, like classes
// useContext Hooks allows you to have multiple contexts
// Context is a way to transport data around; Redux is a store. Redux uses Context inside
// Context is like a DI container! It's a transport mechanism
// Global data
// Context doesn't have to be state! Can also be complex objects or components. So therefore, not a replacement for Redux

// 2
ThemeContext
AuthUserContext

// class consumer
function AuthUserAvatar() {
  return (
      <ThemeContext.Consumer>
          {theme => (
              <AuthUserContext.Consumer>
                  {authUser => (
                      <Avatar theme={theme} img={authUser.profilePicture}>{authUser.username}</Avatar>
                  )}
              </AuthUserContext.Consumer>
          )}
      </ThemeContext.Consumer>
  );
}

// hooks consumer
function AuthUserAvatar() {
  const theme = useContext(ThemeContext);
  const authUser = useContext(AuthUserContext);
  return (
      <Avatar theme={theme} img={authUser.profilePicture}>{authUser.username}</Avatar>
  );
}