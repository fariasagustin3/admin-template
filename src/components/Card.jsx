const Card = () => {
  return (
    <div className="border-[1px] border-[var(--lightgray)] rounded-md px-5 py-2">
      <div>
        <h3>Total Revenue</h3>
        <div className="bg-gradient-to-r from-[#E20990] to-[#961FBA] p-5 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#CECECE" className="w-4 h-4">
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
          </svg>
        </div>
      </div>

    </div>
  )
}

export default Card