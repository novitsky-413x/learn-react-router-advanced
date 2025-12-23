import { useFetcher } from 'react-router-dom';
import { useEffect } from 'react';
import classes from './NewsletterSignup.module.css';

function NewsletterSignup() {
    // useFetcher is similar to useNavigation but it is used for non-navigation related stuff
    // like forms that do not trigger route changes, or requests behind the scenes
    const fetcher = useFetcher();
    const { data, state } = fetcher;
    useEffect(() => {
        if (state === 'idle' && data && data.message) {
            alert(data.message);
        }
    }, [data, state]);
    return (
        // fetcher.Form will trigger an action but it will not intiate a route transition
        <fetcher.Form method="post" action="/newsletter" className={classes.newsletter}>
            <input type="email" placeholder="Sign up for newsletter..." aria-label="Sign up for newsletter" />
            <button>Sign up</button>
        </fetcher.Form>
    );
}

export default NewsletterSignup;
