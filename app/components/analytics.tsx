"use client";

export function Analytics() {
	const token = process.env.NEXT_PUBLIC_BEAM_TOKEN;
	if (!token) {
		return null;
	}
	
	// Add a base URL to ensure relative paths are properly resolved
	const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
	
	return (
		<>
			{/* Add a base tag to help resolve relative URLs */}
			<base href={baseUrl} />
			<script
				src="https://beamanalytics.b-cdn.net/beam.min.js"
				data-token={token}
				data-spa="auto"
				async
			/>
		</>
	);
}
