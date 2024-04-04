<script>
	import { page } from '$app/stores';
    import '../style.css';
    import Fa from 'svelte-fa';
    import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
</script>

<header>
    <nav>
        <ul>
            <li aria-current={$page.url.pathname === '/dashboard' ? 'page' : undefined}>
                <a href="/dashboard">Home</a>
            </li>
            <li aria-current={$page.url.pathname === '/dashboard/stats' ? 'page' : undefined}>
                <a href="/dashboard/stats">Stats</a>
            </li>
            <li aria-current={$page.url.pathname === '/dashboard/manage' ? 'page' : undefined}>
                <a href="/dashboard/manage">Manage</a>
            </li>
        </ul>
    </nav>

    <div class="user-icon">
        <a href=""><Fa icon={faCircleUser} 
            size="2x" 
            pull="left"
        /></a>
    </div>
</header>

<style>
    header {
		display: flex;
		justify-content: space-between;
        align-items: center;
        padding-left: 2vw;
        padding-right: 2vw;
        padding-top: 1vh;
	}

    header a {
        color: var(--color-text);
        text-decoration: none;
		transition: color 0.2s linear;
    }

    nav {
		display: flex;
		justify-content: center;
        margin: auto;
	}

    ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--color-bg-0);
		background-size: contain;
        border-radius: 30px;
        padding-left: 5%;
        padding-right: 5%;
        box-shadow: var(--shaddow);
	}

	li {
		position: relative;
		height: 100%;
        transition: height 0.3s ease;
        transition-property: background-color, border-radius;
	}

    li[aria-current='page'], li:hover {
        background-color: var(--focus);
        border-radius: 30px;
        height: 75%;
    }

    nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--hover);
	}

    .user-icon {
        flex-direction: column;
    } 
</style>